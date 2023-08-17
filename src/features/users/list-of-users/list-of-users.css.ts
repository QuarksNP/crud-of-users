import { vars } from "@global/styles/vars.css";
import { style } from "@vanilla-extract/css";

export const article = style({
    display: 'grid',
    overflow: 'auto',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: vars.space.Medium,
})