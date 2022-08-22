import express from "express";
import { getLogin, postLogin } from "../controllers/userControllers";

const rootRouter = express.Router();

rootRouter.route("/login").get(getLogin).post(postLogin);

export default rootRouter;
