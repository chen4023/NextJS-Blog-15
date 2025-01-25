import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#FFCFCF",
        bgColor: "#FFFFFF",
        font: "#1E201E",
      },
      fontFamily: {
        sejong: ["var(--font-Sejong)"],
      },
    },
  },
  // tailwind markdownviewr 사용시 설정 추가 필수
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
