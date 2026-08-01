import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/site";

export const alt = SITE_NAME;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "96px",
          background: "#09090b",
          color: "#f4f4f5",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#a1a1aa" }}>portfolio.dev</div>
        <div style={{ display: "flex", marginTop: 28, fontSize: 72, fontWeight: 600 }}>
          Портфолио разработчика
        </div>
        <div style={{ display: "flex", marginTop: 20, fontSize: 32, color: "#a1a1aa" }}>
          Проекты, архитектура, техническая экспертиза
        </div>
      </div>
    ),
    { ...size },
  );
}
