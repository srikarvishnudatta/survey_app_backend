import { Request, Response } from "express";
import { EventType, UpdateEventType } from "../lib/types";
import { EventSchema } from "../lib/zodParser";
import { createEventService, deleteEventService, getEventByIdService, getEventsService } from "../service/event.service";

async function getEventsHandler(req: Request, res: Response): Promise<any> {
  const data = await getEventsService();
  return res.status(200).json({data});
}
async function getEventByIdHandler(req:Request<{eventId: string}>, res:Response):Promise<any>{
  const eventId = parseInt(req.params.eventId);
  const result = await getEventByIdService(eventId);
  return res.status(200).json({...result})
}
async function createEventHandler(
  req: Request<{}, {}, EventType>,
  res: Response
): Promise<any> {
  const newEvent = req.body;
  EventSchema.parse({...newEvent});
  await createEventService(newEvent)
  return res.status(201).json("Event created!");
}
async function updateEventHandler(req: Request<{}, {}, UpdateEventType>, res: Response):Promise<any> {
  
}
async function deleteEventHandler(req: Request<{eventId:number}>, res:Response):Promise<any>{
  const eventId = req.params.eventId;
  await deleteEventService(eventId);
  return res.status(301).json({message:"event deleted"});
}
export { getEventsHandler, getEventByIdHandler, createEventHandler,updateEventHandler, deleteEventHandler };
