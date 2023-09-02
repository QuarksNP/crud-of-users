import { Kanit, vars } from "@global/styles";
import { style } from "@vanilla-extract/css";

export const button = style({
    display: 'flex',
    boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    fontFamily: Kanit,
    padding: vars.space.Small,
    marginTop: vars.space.Medium,
    gap: vars.space.Small,
    backgroundColor: vars.colors.White
})