import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./vars.css";

export const Kanit = 'Kanit, sans-serif';

globalStyle('body', {
    backgroundColor: vars.colors.Gray,
    height: '100vh'
})

globalStyle('*', {
    padding: 0,
    margin: 0,
    boxSizing: 'border-box'
})