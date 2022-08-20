import express from "express";
import { getVideos } from "../controllers/videoControllers";

const videoRouter = express.Router();

videoRouter.get("/", getVideos);

export default videoRouter;
