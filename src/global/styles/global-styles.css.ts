import { globalStyle } from "@vanilla-extract/css";

import { vars } from "./vars.css";

export const Kanit = 'Kanit, sans-serif';

globalStyle('#root', {
    backgroundColor: vars.colors.Black_600,
    minHeight: '100vh'
})

globalStyle('*', {
    padding: 0,
    margin: 0,
    boxSizing: 'border-box'
})