/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            fontSize: {
                lg: "1.25rem",
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
