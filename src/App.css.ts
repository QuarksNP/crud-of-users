import { Kanit } from "@global/styles/global-styles.css";
import { vars } from "@global/styles/vars.css";
import { style } from "@vanilla-extract/css";

export const main = style({
    maxWidth: '1080px',
    fontFamily: Kanit,
    padding: vars.space.Small,
    border: 'solid 1px black',
    margin: 'auto'
})