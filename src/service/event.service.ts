import { PrismaClient } from "../generated/prisma/client";
import { EventType } from "../lib/types";
import { RESPONSE_URL } from "../lib/constants";

const prisma = new PrismaClient();

async function getEventsService(){
    return await prisma.events.findMany({});
}
async function getEventByIdService(eventId:number){
    const result = await prisma.events.findFirst({
        where:{
          id:eventId
        }
      });
      const result2 = await prisma.surveyLinks.findUnique({
        where:{
          eventId: eventId,
        },
        include:{
          responses:true
        }
      });
      const responses = result2?.responses;
    return {event: result, responses}
}
async function createEventService(newEvent: EventType){
    const result = await prisma.events.create({
        data: {
          title: newEvent.title,
          location: newEvent.location,
          eventDate: new Date(newEvent.eventDate),
          status: "ACTIVE",
        },
      });
      const link = await prisma.surveyLinks.create({
        data: {
          status: "ACTIVE",
          eventId: result.id,
        },
      });
      const generated = RESPONSE_URL + link.id;
      await Promise.all([
        prisma.events.update({
          where: {
            id: result.id,
          },
          data: {
            generatedLink: generated,
          },
        }),
        prisma.surveyLinks.update({
          where: {
            id: link.id,
          },
          data: {
            generatedLink: generated,
          },
        }),
      ]);
}
async function deleteEventService(eventId: number){
    await prisma.events.delete({
        where:{
          id:eventId
        }
      });
      await prisma.surveyLinks.delete({
        where:{
          eventId:eventId
        }
      });
}
export {getEventsService, getEventByIdService, createEventService, deleteEventService};