import { Router } from "express";
import { surveyFormHandler, surveyGetHandler } from "../controller/survey.controller";

const router = Router();

router.get("/:surveyId", surveyGetHandler);
router.post("/:surveyId", surveyFormHandler);

export {router as surveyRouter};