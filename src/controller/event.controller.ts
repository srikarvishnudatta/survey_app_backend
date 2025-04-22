import { Request, Response } from "express";
import { EventType, UpdateEventType } from "../types";
import { EventSchema } from "../zodParser";
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();
const URL = "http://localhost:5173/survey/";

async function getEventsHandler(req: Request, res: Response): Promise<any> {
  const data = await prisma.events.findMany({});
  return res.status(200).json({data});
}
async function getEventByIdHandler(req:Request<{eventId: string}>, res:Response):Promise<any>{
  const eventId = parseInt(req.params.eventId);
  const result = await prisma.events.findFirst({
    where:{
      id:eventId
    }
  });
  
  return res.status(200).json({event: result})
}
async function createEventHandler(
  req: Request<{}, {}, EventType>,
  res: Response
): Promise<any> {
  const newEvent = req.body;
  EventSchema.parse({...newEvent});
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
  const generated = URL + link.id;
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
  return res.status(201).json("Event created!");
}
async function updateEventHandler(req: Request<{}, {}, UpdateEventType>, res: Response):Promise<any> {
  
}
async function deleteEventHandler(req: Request<{eventId:number}>, res:Response):Promise<any>{
  const eventId = req.params.eventId;
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
  return res.status(301).json({message:"event deleted"});
}
export { getEventsHandler, getEventByIdHandler, createEventHandler,updateEventHandler, deleteEventHandler };
