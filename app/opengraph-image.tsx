import { ImageResponse } from "next/og";
import { site } from "@/content/profile";

export const dynamic = "force-static";
export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0A0A0C",
          color: "#FAFAFA",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#A1A1AA" }}>
          {site.tagline} · {site.location}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 92, fontWeight: 700, letterSpacing: -3 }}>
            {site.name}
          </div>
          <div style={{ display: "flex", fontSize: 40, color: "#A1A1AA", marginTop: 12 }}>
            {site.role}
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#71717A" }}>
          Next.js · React · TypeScript · Supabase · AI-augmented engineering
        </div>
      </div>
    ),
    { ...size }
  );
}
