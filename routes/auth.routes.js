import { Router } from "express";
import authController from "../app/controllers/auth.controller.js";

const routes = new Router();

routes.post("/register", authController.register);

export default routes;
