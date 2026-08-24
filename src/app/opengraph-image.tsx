import { ImageResponse } from "next/og";

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
          justifyContent: "center",
          padding: "80px",
          background: "#17140F",
          color: "#F2ECDF",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: 6,
            color: "#B85A22",
            fontWeight: 700,
            textTransform: "uppercase",
          }}
        >
          FORGE
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 64,
            fontWeight: 800,
            lineHeight: 1.15,
            maxWidth: 920,
            letterSpacing: -1,
          }}
        >
          Websites and software your business actually runs on.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 24,
            color: "#6B6459",
          }}
        >
          Web &amp; Software Development Studio — Pune
        </div>
      </div>
    ),
    { ...size }
  );
}
