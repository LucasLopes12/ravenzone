// src/services/pixService.js
import { abacatePayClient } from "../config/abacatePayConfig.js";

export async function criarPixQRCode({ amount, description, customer }) {
  const body = {
    amount,
    description,
    expiresIn: 900, // 15 minutos = 900 segundos
    customer,
    metadata: { timestamp: new Date().toISOString() },
  };

  const response = await abacatePayClient.post("/pixQrCode/create", body);
  return response.data.data;
}

export async function checarStatusPix(pixId) {
  const response = await abacatePayClient.get(`/pixQrCode/get?id=${pixId}`);
  return response.data.data;
}
