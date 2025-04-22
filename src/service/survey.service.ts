import { PrismaClient } from "../generated/prisma/client";
import { SurveyType } from "../lib/types";

const prisma = new PrismaClient();

async function getSurveyService(surveyId: number){
    const q = await prisma.surveyLinks.findUnique({
        where:{
            id: surveyId,
            status:"ACTIVE"
        }
    });
    if (!q) return null;
    const formData = await prisma.events.findUnique({
        where:{
            id: q?.eventId!
        },
    });
    return formData;
}
async function submitResponseService(surveyId: number, surveyData: SurveyType){
    await prisma.surveyResponses.create({
        data:{
            ...surveyData,
            linkId: surveyId
        }
    });
}
export {getSurveyService, submitResponseService};