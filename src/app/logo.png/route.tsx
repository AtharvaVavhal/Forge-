import { ImageResponse } from "next/og";

export const dynamic = "force-static";

/**
 * Square, standalone rendering of the FORGE mark (same paths as Logo/LogoMark/icon)
 * for use as the Organization logo in JSON-LD — Google's Logo structured data
 * expects a dedicated raster image, not the wordmark lockup or the OG banner.
 */
export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg viewBox="0 0 120 120" width="70%" height="70%">
          <path
            d="M 0,0 L 120,0 L 90,30 L 30,30 L 30,50 L 80,50 L 60,70 L 30,70 L 30,100 L 0,70 Z"
            fill="#17140F"
          />
          <path d="M 0,90 L 30,120 L 0,120 Z" fill="#17140F" />
        </svg>
      </div>
    ),
    { width: 512, height: 512 }
  );
}
