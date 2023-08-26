import { style } from "@vanilla-extract/css";
import { vars } from "@global/styles/vars.css";

export const background = style({
    backgroundColor: vars.colors.Black,
    content: '""',
    position: 'fixed',
    width: '100vw',
    minHeight: '100vh',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    opacity: 0.5,
    zIndex: 30
})