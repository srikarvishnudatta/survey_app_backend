import { Router } from "express";
import { createEventHandler, deleteEventHandler, getEventByIdHandler, getEventsHandler, updateEventHandler } from "../controller/event.controller";

const route = Router();

route.get("/", getEventsHandler);
route.get("/:eventId", getEventByIdHandler)
route.post("/", createEventHandler);
route.put("/", updateEventHandler);
route.delete("/:eventId", deleteEventHandler);

export {route as eventRouter};