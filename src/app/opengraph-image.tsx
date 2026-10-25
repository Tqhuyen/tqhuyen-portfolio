import { ImageResponse } from "next/og";

import { profile, publications } from "@/content/profile";

export const alt = `${profile.name}, ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The default OG font has no Vietnamese diacritics, so the card uses the
// unaccented name.
export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        background: "#0f172a",
        color: "#f8fafc",
      }}
    >
      <div style={{ fontSize: 32, color: "#22c55e" }}>$ whoami</div>
      <div style={{ marginTop: 24, fontSize: 88, fontWeight: 700, letterSpacing: "-0.03em" }}>Tran Quang Huyen</div>
      <div style={{ marginTop: 20, fontSize: 40, color: "#22c55e" }}>{profile.role}</div>
      <div style={{ marginTop: 36, fontSize: 30, color: "#cbd5e1", maxWidth: 980 }}>
        {`GenAI, computer vision and voice AI in production · quantum ML and medical imaging research · ${publications.length} first-author IEEE papers`}
      </div>
    </div>,
    size,
  );
}
