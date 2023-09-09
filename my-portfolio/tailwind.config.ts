import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/**/*.{js,jsx,ts,tsx}", "./sections/**/**/*.{js,jsx,ts,tsx}", "./icon/**/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
export default config;
