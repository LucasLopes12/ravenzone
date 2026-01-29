// src/routes/pixRoutes.js
import express from "express";
import { gerarPagamentoPix, statusPagamentoPix } from "../controllers/pixController.js";

const router = express.Router();

router.post("/create", gerarPagamentoPix);         // criar PIX
router.get("/status/:id", statusPagamentoPix);     // checar status

export default router;
