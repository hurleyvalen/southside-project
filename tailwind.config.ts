import type {Config} from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./sanity/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            screens: {
                xs: "475px",
            },
            colors: {
                primary: {
                    "100": "#FFE8F0",
                    DEFAULT: "#EE2B69",
                },
                secondary: "#FBE843",
                black: {
                    "100": "#333333",
                    "200": "#141413",
                    "300": "#7D8087",
                    DEFAULT: "#000000",
                },
                white: {
                    "100": "#F7F7F7",
                    DEFAULT: "#FFFFFF",
                },
                earthyBrown: '#6F4E37',
                creamyBeige: '#FFF5E1',
                forestGreen: '#228B22',
                mutedOrange: '#FF8C42',
                softBlue: '#A9D6E5',
                charcoalGray: '#2F4F4F',
                goldenYellow: '#FFD700',
                sageGreen: '#C5D7B6',
                skyBlue: '#A8D0DB',
                cream: '#F5F0E1',
                dustyRose: '#E3B4B3',
                mochaBrown: '#D0B8A8',
                lavenderMist: '#D8C8E0',
                blushPeach: '#F6C8B8',
              },
              fontFamily: {
                  "work-sans": ["var(--font-work-sans)"],
                  "poppins": ["var(--font-poppins)"],
              },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            boxShadow: {
                100: "2px 2px 0px 0px rgb(0, 0, 0)",
                200: "2px 2px 0px 2px rgb(0, 0, 0)",
                300: "2px 2px 0px 2px rgb(238, 43, 105)",
            },
        },
    },
    plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};

export default config;