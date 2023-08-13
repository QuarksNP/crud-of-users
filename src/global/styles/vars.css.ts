import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(':root', {
    colors: {
        White: "#FFFFFF",
        Black: "#000000",
        Gray: "#F4F4F4",
        Green: "#10D36B",
        Blue: "#2C6EC7",
        Red: "#EC647D"
    },

    space: {
        Default: '0',
        Small: '0.5rem',
        Medium: '1rem',
        Large: '2rem',
        Larger: '3rem',
        Largest: '8rem'
    },

    font: {
        Kanit: 'Kanit, sans-serif'
    }
});