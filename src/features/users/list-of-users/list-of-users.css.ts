import { vars } from "@global/styles/vars.css";

import { style } from "@vanilla-extract/css";

export const article = style({
    display: 'grid',
    overflowX: 'hidden',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: vars.space.Medium,
})

