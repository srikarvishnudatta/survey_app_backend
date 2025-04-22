import z from "zod";

const SurveySchema = z.object({
    name: z.string(),
    rating:z.number(),
    feedback:z.string()
});

const EventSchema = z.object({
    title:z.string(),
    location:z.string(),
    eventDate: z.string()
});

export {SurveySchema, EventSchema};