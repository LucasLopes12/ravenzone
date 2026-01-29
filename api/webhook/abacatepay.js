export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const payload = req.body;

    console.log("🔔 Webhook Abacate Pay");
    console.log("Evento:", payload.event);

    if (payload.event === "billing.paid") {
      console.log("✅ PAGAMENTO CONFIRMADO");
      console.log("Billing ID:", payload.data.id);
      console.log("Valor:", payload.data.amount);
    }

    return res.status(200).json({ received: true });
  } catch (err) {
    console.error("Erro webhook:", err);
    return res.status(500).json({ error: "Erro interno" });
  }
}
