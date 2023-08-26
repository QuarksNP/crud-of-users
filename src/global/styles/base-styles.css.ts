import { StyleRule, style } from "@vanilla-extract/css";
import { vars } from ".";

export const baseGreenColorTransition = style({
    backgroundColor: vars.colors.Green,
    transition: 'background-color .2s ease',

    '&:hover': {
        backgroundColor: vars.hover_colors.Light_Green
    }

} as StyleRule)