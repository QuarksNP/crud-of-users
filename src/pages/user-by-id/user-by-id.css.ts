import { Kanit, vars } from "@global/styles";
import { StyleRule, style } from "@vanilla-extract/css";

export const section = style({
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    overflowX: 'hidden',
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
    },

} as StyleRule)

export const btn_home = style({
    alignSelf: 'flex-end',
    boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    fontFamily: Kanit,
    padding: vars.space.Small,
    backgroundColor: vars.colors.White
})

export const picture = style({
    display: 'flex',
    justifyContent: 'center',

    '& > img': {
        width: '80px',
        height: '80px',
        borderRadius: '100%',
        objectFit: 'cover',
        boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)',
    }
} as StyleRule)