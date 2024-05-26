/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", "sans-serif"],
            },
            colors: {
                primary: {
                    light: "#FFD1DC", // Light pink
                    DEFAULT: "#FFB7C5", // Default cotton candy pink
                    dark: "#FF91A4", // Darker pink
                },
                secondary: {
                    light: "#B0E0E6", // Light pastel blue
                    DEFAULT: "#ADD8E6", // Default pastel blue
                    dark: "#87CEEB", // Darker pastel blue
                },
                accent: {
                    light: "#FFDFBA", // Light pastel orange
                    DEFAULT: "#FFCC99", // Default pastel orange
                    dark: "#FFB266", // Darker pastel orange
                },
                heading: "#333333", // Dark gray for headings
                subheading: "#4F4F4F", // Slightly lighter gray for subheadings
                body: "#666666", // Medium gray for body text
                caption: "#999999", // Light gray for captions
            },
        },
    },
    plugins: [],
};

