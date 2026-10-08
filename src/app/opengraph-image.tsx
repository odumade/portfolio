import { portfolio } from "@/data/portfolio";
import { ImageResponse } from "next/og";

export const alt = portfolio.seo.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #042f2e 0%, #0f766e 48%, #0e7490 100%)",
          color: "white",
          padding: 72,
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 6 }}>{portfolio.initials}</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05 }}>{portfolio.name}</div>
          <div style={{ marginTop: 16, fontSize: 32, opacity: 0.9 }}>{portfolio.role}</div>
        </div>
      </div>
    ),
    size,
  );
}
