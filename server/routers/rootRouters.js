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
const fileUpload = videoUpload.fields([
  { name: "videoFile", maxCount: 1 },
  { name: "thumbnail", maxCount: 1 },
]);
const profileUpload = multer({ dest: "uploads/users/" });
const profileImgFile = profileUpload.single("profileImg");

rootRouter.route("/login").get(getLogin).post(postLogin);
rootRouter.route("/join").get(getJoin).post(profileImgFile, postJoin);
rootRouter.route("/upload").post(fileUpload, postUpload);

export default rootRouter;
