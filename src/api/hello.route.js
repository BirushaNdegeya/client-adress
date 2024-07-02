import { Router } from "express";
import { hello } from "../controller/hello.controller.js";


const helloRoute = Router();

helloRoute.get('/', hello);

export default helloRoute;