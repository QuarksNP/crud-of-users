import { vars } from "@global/styles";
import { style } from "@vanilla-extract/css";

export const button = style({
    border: 'none',
    display: 'flex',
    clipPath: 'circle(20px)',
    cursor: 'pointer',
    boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)',
    padding: vars.space.Small,
    background: vars.colors.Green,
    color: vars.colors.White
})