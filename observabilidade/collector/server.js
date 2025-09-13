const express = require("express");
const cors = require("cors");
const client = require("prom-client");

const app = express();
const PORT = process.env.PORT || 4000;
const CORS_ORIGIN = process.env.CORS_ORIGIN || "*";

// --- Middlewares
app.use(express.json());
app.use(cors({ origin: CORS_ORIGIN, methods: ["GET", "POST"] }));

// --- Prometheus registry e métricas padrão do processo
const register = new client.Registry();
client.collectDefaultMetrics({ register });

// --- Métrica principal: cliques no botão de orçamento
const orcamentoClicks = new client.Counter({
  name: "frontend_orcamento_clicks_total",
  help: "Total de cliques no botão de orçamento",
  labelNames: ["page"],
});
register.registerMetric(orcamentoClicks);

// Opcional: medir latência do endpoint /track
const trackDuration = new client.Histogram({
  name: "track_duration_seconds",
  help: "Duração do processamento do /track",
  buckets: [0.05, 0.1, 0.25, 0.5, 1, 2],
});
register.registerMetric(trackDuration);

// --- Endpoints
app.get("/healthz", (_, res) => res.send("ok"));

app.post("/track", async (req, res) => {
  const end = trackDuration.startTimer();
  try {
    const { action, page } = req.body || {};
    const safePage = typeof page === "string" ? page : "unknown";

    orcamentoClicks.inc({ page: safePage });

    return res.json({ ok: true });
  } catch (e) {
    return res.status(500).json({ ok: false, error: e.message });
  } finally {
    end();
  }
});

app.get("/metrics", async (_, res) => {
  res.set("Content-Type", register.contentType);
  res.end(await register.metrics());
});

app.listen(PORT, () => {
  console.log(`Collector listening on http://0.0.0.0:${PORT}`);
  console.log(`CORS_ORIGIN: ${CORS_ORIGIN}`);
});
