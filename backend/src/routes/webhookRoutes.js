import express from "express";
import { webhookAbacatePay } from "../controllers/webhookController.js";

const router = express.Router();

router.post("/abacatepay", webhookAbacatePay);

export default router;
