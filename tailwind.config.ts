import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0D12",
        surface: {
          DEFAULT: "#171A22",
          elevated: "#1F232D",
          subtle: "#12141A",
        },
        accent: {
          DEFAULT: "#A8FF78",
          muted: "rgba(168, 255, 120, 0.15)",
          hover: "#BDFF96",
        },
        primary: {
          DEFAULT: "#F4F5F7",
          muted: "#A5A8B3",
        },
        border: {
          subtle: "rgba(244, 245, 247, 0.08)",
          hover: "rgba(244, 245, 247, 0.18)",
          accent: "rgba(168, 255, 120, 0.3)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-plus-jakarta-sans)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      animation: {
        "pulse-subtle": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
