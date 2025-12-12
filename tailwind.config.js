/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            screens: {
                desktop: "1920px", // ≥ 1920px
                tablet: "744px", // ≥ 744px
                mobile: "375px", // ≥ 375px
            },

            colors: {
                // Primary Blue Scale
                primary: {
                    100: "#3692ff",
                    200: "#1967d6",
                    300: "#1251aa",
                },

                // Error
                error: {
                    500: "#f74747",
                },

                // Secondary Gray Scale
                secondary: {
                    900: "#111827",
                    800: "#1f2937",
                    700: "#374151",
                    600: "#4b5563",
                    500: "#6b7280",
                    400: "#9ca3af",
                    300: "#d1d5db",
                    200: "#e5e7eb",
                    100: "#f3f4f6",
                    50: "#f9fafb",
                },
            },

            fontFamily: {
                base: [
                    "Pretendard",
                    "-apple-system",
                    "BlinkMacSystemFont",
                    '"Segoe UI"',
                    "system-ui",
                    "sans-serif",
                ],
            },

            fontWeight: {
                regular: 400,
                medium: 500,
                semibold: 600,
                bold: 700,
            },

            fontSize: {
                "3xl": ["32px", "42px"], // font-size: 32px;  line-height: 42px;
                "2xl": ["24px", "32px"],
                xl: ["20px", "32px"],
                "2lg": ["18px", "26px"],
                lg: ["16px", "26px"],
                md: ["14px", "24px"],
                sm: ["13px", "22px"],
                xs: ["12px", "18px"],
            },
        },
    },
    plugins: [],
};
