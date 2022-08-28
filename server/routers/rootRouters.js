import express from "express";
import multer from "multer";
import {
  getLogin,
  postLogin,
  getJoin,
  postJoin,
} from "../controllers/userControllers";
import { postUpload } from "../controllers/videoControllers";

const rootRouter = express.Router();
const videoUpload = multer({ dest: "uploads/videos/" });
const videoUpload = videoUpload.fields([
  { name: "videoFile", maxCount: 1 },
  { name: "thumbnail", maxCount: 1 },
]);

rootRouter.route("/login").get(getLogin).post(postLogin);
rootRouter.route("/join").get(getJoin).post(postJoin);
rootRouter.route("/upload").post(videoUpload, postUpload);

export default rootRouter;
