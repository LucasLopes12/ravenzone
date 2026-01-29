import express from "express";
import dotenv from "dotenv";

import pixRoutes from "./routes/pixRoutes.js";
import webhookRoutes from "./routes/webhookRoutes.js";

dotenv.config({ path: "../../.env" });

const app = express();
app.use(express.json());

app.use("/api/pix", pixRoutes);

app.use("/webhook", webhookRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🔥 Backend rodando na porta ${PORT}`);
});
