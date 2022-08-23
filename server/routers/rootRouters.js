import express from "express";
import {
  getLogin,
  postLogin,
  getJoin,
  postJoin,
} from "../controllers/userControllers";
import { postUpload } from "../controllers/videoControllers";

const rootRouter = express.Router();

rootRouter.route("/login").get(getLogin).post(postLogin);
rootRouter.route("/join").get(getJoin).post(postJoin);
rootRouter.route("/upload").post(postUpload);

export default rootRouter;
