import { vars } from "@global/styles/vars.css";
import { StyleRule, style } from "@vanilla-extract/css";

export const descContainer = style({
    display: 'flex',
    alignItems: 'center',
    gap: vars.space.Medium
})

export const picture = style({
    position: 'relative',
    display: 'flex',

    '& > img': {
        objectFit: 'cover',
        width: '60px',
        height: '60px',
        borderRadius: '100%'
    }
} as StyleRule)

export const basicDesc = style({
    display: 'flex',
    flexDirection: 'column',
})

export const name = style({
    fontSize: '18px',
    fontWeight: 'bold',
})