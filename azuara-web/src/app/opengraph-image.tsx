import { ImageResponse } from "next/og";

export const alt = "Azuara & Asociados Abogados · Firma legal en Monterrey, N.L.";
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
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(180deg, #343A40 0%, #4A0B03 100%)",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#C4AF88",
          }}
        >
          Firma legal en Monterrey, N.L.
        </div>
        <div style={{ marginTop: 28, fontSize: 96, fontWeight: 700 }}>
          Azuara &amp; Asociados
        </div>
        <div style={{ fontSize: 80, fontWeight: 700, color: "#AD9469" }}>
          Abogados
        </div>
        <div
          style={{
            marginTop: 40,
            width: 120,
            height: 6,
            background: "#AD9469",
          }}
        />
        <div style={{ marginTop: 36, fontSize: 30, color: "#e5e5e5" }}>
          Civil · Familiar · Laboral · Penal · Empresarial · Amparos
        </div>
      </div>
    ),
    size,
  );
}
