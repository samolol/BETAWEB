import { ImageResponse } from "next/og";

import { siteContent } from "@/content/site";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, rgba(18,118,109,0.14), rgba(255,255,255,1))",
          padding: "72px",
          color: "#142132",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
          }}
        >
          <div
            style={{
              display: "flex",
              height: "72px",
              width: "72px",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "24px",
              background: "#12766d",
              color: "#ffffff",
              fontSize: "28px",
              fontWeight: 700,
            }}
          >
            W
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "18px", opacity: 0.75 }}>
              {siteContent.brand.domain}
            </span>
            <span style={{ fontSize: "34px", fontWeight: 700 }}>
              {siteContent.brand.name}
            </span>
          </div>
        </div>

        <div style={{ display: "flex", maxWidth: "920px", flexDirection: "column" }}>
          <span
            style={{
              fontSize: "20px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#12766d",
            }}
          >
            Tvorba webů na míru
          </span>
          <h1
            style={{
              margin: "20px 0 0",
              fontSize: "68px",
              lineHeight: 1.05,
              fontWeight: 700,
            }}
          >
            Web, který působí profesionálně a přivádí poptávky.
          </h1>
        </div>

        <div style={{ display: "flex", gap: "18px" }}>
          {siteContent.hero.highlights.map((item) => (
            <span
              key={item}
              style={{
                borderRadius: "999px",
                border: "1px solid rgba(20,33,50,0.12)",
                background: "rgba(255,255,255,0.72)",
                padding: "14px 18px",
                fontSize: "22px",
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
