import { vars } from "@global/styles/vars.css";
import { StyleRule, style } from "@vanilla-extract/css";


export const section = style({
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: vars.colors.White,
    padding: vars.space.Medium,
    boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)'
})


export const actionsContainer = style({
    display: 'flex',
    gap: vars.space.Medium,

    '& > button': {
        width: '25px',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        color: vars.colors.Gray_50
    }
} as StyleRule)


