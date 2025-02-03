import express from "express";
import { processAgentQuery } from "../controller/agentController.js";

const router = express.Router();
router.post("/car-recommendation", processAgentQuery);
export default router;
