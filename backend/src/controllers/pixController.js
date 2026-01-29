// src/controllers/pixController.js
import { criarPixQRCode, checarStatusPix } from "../services/pixService.js";

export async function gerarPagamentoPix(req, res) {
  try {
    const { amount, customer } = req.body;
    const data = await criarPixQRCode({ amount, description: "Pagamento PIX", customer });
    res.status(200).json({ success: true, pix: data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
}

export async function statusPagamentoPix(req, res) {
  try {
    const { id } = req.params;
    const data = await checarStatusPix(id);
    res.status(200).json({ success: true, status: data.status });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
}
