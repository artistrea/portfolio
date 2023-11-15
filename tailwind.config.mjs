/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        text: "var(--clr-text)",
        background: "var(--clr-background)",
        primary: "var(--clr-primary)",
        secondary: "var(--clr-secondary)",
        accent: "var(--clr-accent)",
      },
    },
  },
  plugins: [],
};
