import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(':root', {
    colors: {
        White: "#FFFFFF",
        Black: "#000000",
        Gray: "#F4F4F4",
        Gray_50: "#7D7D7D",
        Green: "#10D36B",
        Blue: "#2C6EC7",
        Red: "#EC647D",
    },

    space: {
        Default: '0',
        Smaller: '0.15rem',
        Small: '0.5rem',
        Medium: '1rem',
        Large: '2rem',
        Larger: '3rem',
        Largest: '8rem'
    },
});