import { Kanit } from "@global/styles/global-styles.css";
import { vars } from "@global/styles/vars.css";
import { style } from "@vanilla-extract/css";

export const main = style({
    maxWidth: '1080px',
    height: '100%',
    fontFamily: Kanit,
    padding: `${vars.space.Large} ${vars.space.Medium}`,
    margin: 'auto'
})