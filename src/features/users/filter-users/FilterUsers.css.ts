import { Kanit, vars } from "@global/styles";

import { StyleRule, style } from "@vanilla-extract/css";

export const containerFilter = style({
    display: 'flex',
    width: '14rem',
    height: '2.5rem',
    borderRadius: '5px',
    boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)',
    backgroundColor: vars.colors.Black_400,

    '& > label': {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        padding: vars.space.Small,
        color: vars.colors.Gray_50
    },

    '& > input': {
        height: '100%',
        width: '100%',
        border: 'none',
        background: 'none',
        outline: 'none',
        fontFamily: Kanit,
        paddingRight: vars.space.Small,
        color: vars.colors.White
    }
} as StyleRule)