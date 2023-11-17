/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        text: "rgba(var(--rgb-text))",
        background: "rgba(var(--rgb-background))",
        primary: "rgba(var(--rgb-primary))",
        secondary: "rgba(var(--rgb-secondary))",
        accent: "rgba(var(--rgb-accent))",
      },
      backgroundColor: {
        text: "rgba(var(--rgb-text), var(--tw-bg-opacity, 1))",
        background: "rgba(var(--rgb-background), var(--tw-bg-opacity, 1))",
        primary: "rgba(var(--rgb-primary), var(--tw-bg-opacity, 1))",
        secondary: "rgba(var(--rgb-secondary), var(--tw-bg-opacity, 1))",
        accent: "rgba(var(--rgb-accent), var(--tw-bg-opacity, 1))",
      },
      textColor: {
        normal: "rgba(var(--rgb-text), 0.7)",
        highlight: "rgba(var(--rgb-text), 1)",
        background: "rgba(var(--rgb-background), var(--tw-text-opacity, 1))",
        primary: "rgba(var(--rgb-primary), var(--tw-text-opacity, 1))",
        secondary: "rgba(var(--rgb-secondary), var(--tw-text-opacity, 1))",
        accent: "rgba(var(--rgb-accent), var(--tw-text-opacity, 1))",
      },
    },
  },
  plugins: [],
};
