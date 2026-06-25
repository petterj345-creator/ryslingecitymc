import { SERVER_IP } from "@/lib/config";

// Proxies the public Minecraft status API so the browser gets a small, cached
// JSON payload (and no CORS issues). Refreshes at most every 30s.
export const revalidate = 30;

export async function GET() {
  try {
    const res = await fetch(
      `https://api.mcstatus.io/v2/status/java/${SERVER_IP}`,
      { next: { revalidate: 30 } }
    );
    if (!res.ok) throw new Error("status fetch failed");
    const data = await res.json();
    return Response.json({
      online: Boolean(data.online),
      players: {
        online: Number(data.players?.online ?? 0),
        max: Number(data.players?.max ?? 0),
      },
    });
  } catch {
    return Response.json({ online: false, players: { online: 0, max: 0 } });
  }
}
