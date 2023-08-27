import { vars } from "@global/styles";
import { StyleRule, style } from "@vanilla-extract/css";

export const section = style({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: '480px',
    margin: 'auto',
    borderRadius: '5px',
    boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)',
    backgroundColor: vars.colors.Black_400,
    gap: vars.space.Medium,
    color: vars.colors.White,
    padding: vars.space.Medium,


    '& > h1': {
        textAlign: 'center',
    }
} as StyleRule)

export const picture = style({
    display: 'flex',
    justifyContent: 'center',
    
    '& > img': {
        width: '100px',
        height: '100px',
        borderRadius: '100%',
        objectFit: 'cover',
        boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)',
    }
} as StyleRule)