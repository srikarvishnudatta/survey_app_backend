import { Request, Response } from "express";
import { SurveyType } from "../types";
import { SurveySchema } from "../zodParser";
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();
async function surveyGetHandler(req: Request<{surveyId:string}, {}, {}>, res: Response): Promise<any>{
    const surveyId = parseInt(req.params.surveyId);
    const q = await prisma.surveyLinks.findUnique({
        where:{
            id: surveyId,
            status:"ACTIVE"
        }
    });
    if (!q) return res.status(404).json("cannot find it");
    const formData = await prisma.events.findUnique({
        where:{
            id: q?.eventId!
        },
    });
    return res.status(200).json(formData);
}

async function surveyFormHandler(req: Request<{surveyLinkId:string}, {}, SurveyType>, res: Response): Promise<any>{
    const surveyData = req.body;    
    const surveyId = parseInt(req.params.surveyLinkId);
    console.log(surveyData);
    SurveySchema.parse({...surveyData});

    await prisma.surveyResponses.create({
        data:{
            ...surveyData,
            linkId: surveyId
        }
    });

    return res.status(201).json({message: "response submitted!"});
}
export {surveyGetHandler, surveyFormHandler}
