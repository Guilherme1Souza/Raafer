export async function track(action, extra = {}) {
  try {
    const base = process.env.GATSBY_METRICS_URL || "http://localhost:4000";
    const page =
      typeof window !== "undefined" ? window.location.pathname : "unknown";

    await fetch(`${base}/track`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      keepalive: true, // ajuda em navegadores ao fechar aba
      body: JSON.stringify({ action, page, ...extra }),
    });
  } catch (err) {
    // silencioso: não quebra a UX se o collector estiver fora
    if (process.env.NODE_ENV === "development") {
      console.warn("track error:", err);
    }
  }
}
