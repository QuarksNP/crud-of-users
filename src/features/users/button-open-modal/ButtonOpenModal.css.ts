import { Kanit, vars } from "@global/styles";
import { StyleRule, style } from "@vanilla-extract/css";

export const button = style({
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: '5px',
    boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)',
    transition: 'background-color .2s ease',
    gap: vars.space.Small,
    padding: vars.space.Small,
    background: vars.colors.Green,
    color: vars.colors.White,
    fontFamily: Kanit,

    '&:hover': {
        backgroundColor: vars.hover_colors.Light_Green
    }
    
} as StyleRule)