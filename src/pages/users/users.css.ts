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
    gap: "3rem",
})

export const header = style({
    display: "flex",
    position: 'sticky',
    flexWrap: "wrap-reverse",
    justifyContent: "space-between",
    top: 0,
    zIndex: 20,
    background: vars.colors.Black_600,
    padding: `${vars.space.Medium} 0`,
    gap: vars.space.Medium,
})