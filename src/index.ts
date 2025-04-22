import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { surveyRouter } from "./routes/survey.route";
import { eventRouter } from "./routes/event.route";

const app = express();
config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const PORT = process.env.PORT || 5000;

app.use("/survey", surveyRouter);
app.use("/events", eventRouter);


app.listen(PORT, () => {
    console.log("running app on PORT ", PORT);
});