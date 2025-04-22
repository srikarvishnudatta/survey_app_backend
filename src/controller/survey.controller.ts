import { Request, Response } from "express";
import { SurveyType } from "../lib/types";
import { SurveySchema } from "../lib/zodParser";
import { PrismaClient } from "../generated/prisma";
import { getSurveyService, submitResponseService } from "../service/survey.service";

const prisma = new PrismaClient();
async function surveyGetHandler(req: Request<{surveyId:string}, {}, {}>, res: Response): Promise<any>{
    const surveyId = parseInt(req.params.surveyId);
    const result = await getSurveyService(surveyId);
    if (!result) res.status(404);
    return res.status(200).json(result);
}

async function surveyFormHandler(req: Request<{surveyId:string}, {}, SurveyType>, res: Response): Promise<any>{
    const surveyData = req.body;    
    const surveyId = parseInt(req.params.surveyId);
    SurveySchema.parse({...surveyData});

    await submitResponseService(surveyId, surveyData);

    return res.status(201).json({message: "response submitted!"});
}
export {surveyGetHandler, surveyFormHandler}
