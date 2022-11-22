/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            sm: "480px",
            // => @media (min-width: 640px) { ... }

            md: "768px",
            // => @media (min-width: 768px) { ... }

            lg: "976px",
            // => @media (min-width: 1024px) { ... }

            xl: "1440px",
            // => @media (min-width: 1280px) { ... }

            "2xl": "1536px",
            // => @media (min-width: 1536px) { ... }
        },
        extend: {
            colors: {
                blazePimary: "#3A3E45",
                blazePrimary900: "#1A1D24",
                blazePrimary800: "#3A3E45",
                blazePrimary700: "#595D64",
                blazePrimary600: "#6C7178",
                blazePrimary500: "#9599A1",
                blazePrimary400: "#B4B9C1",
                blazePrimary300: "#D7DCE5",
                blazePrimary200: "#E6EBF4",
                blazePrimary100: "#EFF4FC",
                blazePrimary50: "#F5FAFF",
                blazeAccent: "#059165",
                blazeAccent900: "#0A6042",
                blazeAccent800: "#068058",
                blazeAccent700: "#059165",
                blazeAccent600: "#0CA373",
                blazeAccent500: "#13B37E",
                blazeAccent400: "#48BE91",
                blazeAccent300: "#6DCAA4",
                blazeAccent200: "#99D8BE",
                blazeAccent100: "#C1E7D7",
                blazeAccent50: "#E5F6EF",
                blazeCTA: "#29BCB7",
                blazeCTA900: "#005347",
                blazeCTA800: "#007065",
                blazeCTA700: "#008075",
                blazeCTA600: "#009086",
                blazeCTA500: "#009D94",
                blazeCTA400: "#00ADA6",
                blazeCTA300: "#29BCB7",
                blazeCTA200: "#74CFCD",
                blazeCTA100: "#ADE2E0",
                blazeCTA50: "#DEF3F3",
            },
        },
    },
    plugins: [
        // ...
        // require("@tailwindcss/aspect-ratio"),
    ],
};
