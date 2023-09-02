import { vars } from "@global/styles";

import { style } from "@vanilla-extract/css";

export const no_users_article = style({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    color: "white",
    gap: vars.space.Medium
})

export const section = style({
    display: "flex",
    flexDirection: "column",
    height: "100%",
    gap: vars.space.Medium,
})

export const header = style({
    display: "flex",
    flexWrap: "wrap-reverse",
    justifyContent: "space-between",
    zIndex: 20,
    gap: vars.space.Medium,
    background: vars.colors.Black_600,
})