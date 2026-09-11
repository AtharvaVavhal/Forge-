import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#17140F",
          padding: 28,
        }}
      >
        <svg viewBox="0 0 120 120" width="100%" height="100%">
          <path
            d="M 0,0 L 120,0 L 90,30 L 30,30 L 30,50 L 80,50 L 60,70 L 30,70 L 30,100 L 0,70 Z"
            fill="#F3EFE7"
          />
          <path d="M 0,90 L 30,120 L 0,120 Z" fill="#F3EFE7" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
