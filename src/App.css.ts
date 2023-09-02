import { Kanit, vars } from "@global/styles";

import { style } from "@vanilla-extract/css";

export const main = style({
    maxWidth: '1080px',
    height: '100%',
    fontFamily: Kanit,
    margin: 'auto',
    padding: `${vars.space.Large} ${vars.space.Medium}`,
})