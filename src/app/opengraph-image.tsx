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
        <div style={{ display: "flex" }}>
          <svg viewBox="0 0 580 120" width={174} height={36} fill="#B85A22">
            <g>
              <path d="M 0,0 L 120,0 L 90,30 L 30,30 L 30,50 L 80,50 L 60,70 L 30,70 L 30,100 L 0,70 Z" />
              <path d="M 0,90 L 30,120 L 0,120 Z" />
            </g>
            <g transform="translate(150, 10)">
              <path d="M 0,0 L 75,0 L 75,22 L 25,22 L 25,39 L 68,39 L 68,61 L 25,61 L 25,100 L 0,100 Z" />
              <path d="M 118,12 C 103,12 92,26 92,50 C 92,74 103,88 118,88 C 133,88 144,74 144,50 C 144,26 133,12 118,12 Z M 118,31 C 122,31 124,38 124,50 C 124,62 122,69 118,69 C 114,69 112,62 112,50 C 112,38 114,31 118,31 Z" />
              <path d="M 164,0 L 200,0 C 218,0 228,8 228,24 C 228,36 220,44 207,48 C 222,54 227,65 233,100 L 208,100 C 204,74 200,68 189,68 L 189,100 L 164,100 Z M 189,20 L 189,48 L 200,48 C 207,48 212,44 212,34 C 212,24 207,20 200,20 Z" />
              <path d="M 284,12 C 269,12 257,25 257,50 C 257,75 269,88 285,88 C 298,88 308,80 311,68 L 287,68 L 287,51 L 333,51 C 334,55 334,58 334,62 C 334,84 316,100 285,100 C 255,100 237,79 237,50 C 237,21 255,0 284,0 C 304,0 321,9 330,25 L 311,38 C 305,26 296,12 284,12 Z" />
              <path d="M 353,0 L 428,0 L 428,21 L 378,21 L 378,39 L 422,39 L 422,60 L 378,60 L 378,79 L 428,79 L 428,100 L 353,100 Z" />
            </g>
          </svg>
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
