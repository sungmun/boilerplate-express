import { Router } from "express";
import { healthCheckRouter } from "./healthCheck";

const route = Router();

route.use("/", healthCheckRouter);

export { route };
