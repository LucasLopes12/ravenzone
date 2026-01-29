export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const payload = req.body;

    const { event, data } = payload;

    console.log("🔔 Webhook recebido:", event);

    if (event === "billing.paid") {
      console.log("✅ PAGAMENTO CONFIRMADO");
      console.log("Billing ID:", data.id);
      console.log("Valor:", data.amount);
    }

    return res.status(200).json({ received: true });
  } catch (err) {
    console.error("Erro webhook:", err.message);
    return res.status(500).json({ error: "Erro interno" });
  }
}
