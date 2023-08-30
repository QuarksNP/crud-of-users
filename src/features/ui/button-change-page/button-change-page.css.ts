import { vars } from "@global/styles";
import { style } from "@vanilla-extract/css";

export const button = style({
    display: 'flex',
    gap: vars.space.Medium,
    backgroundColor: vars.colors.White
})