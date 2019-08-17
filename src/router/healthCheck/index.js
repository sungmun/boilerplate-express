import { Router } from "express";
import { HealthCheck } from "../../controller";

const healthCheckRouter = Router();

healthCheckRouter.get("/", healthCheckController.healthCheck);

export { healthCheckRouter };
