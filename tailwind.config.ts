import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },        backgroundImage: {
        'custom-radial': 'radial-gradient(42.38% 44.19% at 50.14% 67.33%, #FFF280 0%, #FFC700 100%)',
      },
    },
  },
  plugins: [],
};
export default config;
