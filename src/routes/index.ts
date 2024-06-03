import { Router } from "express";
import { createNewtask, deletetask, gettask, specifictask, updatetask } from "../controller/task.controller";

const allRoutes = Router();


allRoutes.get("/tasks",gettask)
allRoutes.get("/tasks/:id",specifictask)
allRoutes.post("/tasks",createNewtask)
allRoutes.put("/tasks/:id",updatetask)
allRoutes.delete("/tasks/:id",deletetask)

export default allRoutes