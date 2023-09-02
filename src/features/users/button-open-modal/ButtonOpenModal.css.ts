import { Kanit, vars, baseGreenColorTransition } from "@global/styles";

import { StyleRule, style } from "@vanilla-extract/css";

export const button = style([baseGreenColorTransition, {
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: '5px',
    boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)',
    gap: vars.space.Small,
    padding: vars.space.Small,
    color: vars.colors.White,
    fontFamily: Kanit,
    
} as StyleRule])