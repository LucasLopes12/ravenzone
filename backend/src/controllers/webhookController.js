export async function webhookAbacatePay(req, res) {
  try {
    const event = req.body;

    /**
     * Estrutura típica recebida:
     * {
     *   event: "pix.paid",
     *   data: {
     *     id: "pix_id",
     *     amount: 1000,
     *     status: "PAID"
     *   }
     * }
     */

    if (!event || !event.data) {
      return res.status(400).json({ error: "Payload inválido" });
    }

    const { id, status, amount } = event.data;

    console.log("🔔 Webhook recebido:");
    console.log("PIX ID:", id);
    console.log("STATUS:", status);
    console.log("VALOR:", amount);


    // if (status === "PAID") {
    //   marcarPagamentoComoPago(id);
    // }

    return res.status(200).json({ received: true });
  } catch (err) {
    console.error("Erro no webhook:", err.message);
    return res.status(500).json({ error: "Erro interno" });
  }
}
