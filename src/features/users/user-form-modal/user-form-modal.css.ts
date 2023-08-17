import { Kanit } from "@global/styles/global-styles.css";
import { vars } from "@global/styles/vars.css";
import { StyleRule, style } from "@vanilla-extract/css";

export const article = style({
    position: "fixed",
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    maxWidth: '460px',
    padding: vars.space.Medium,
    backgroundColor: vars.colors.White,
    color: vars.colors.Black,
    fontFamily: Kanit,
    
    zIndex: 20
})

export const close = style({
    display: 'flex',
    justifyContent: 'end',

    '& > button': {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
    }
} as StyleRule)

export const title = style({
    fontSize: '20px'
})

export const fieldset = style({
    display: 'flex',
    flexDirection: 'column',
    border: 'none',
    gap: vars.space.Small,
    margin: `${vars.space.Medium} 0`,

    '& > input': {
        fontFamily: Kanit,
        border: `1px solid ${vars.colors.Gray_50}`,
        padding: vars.space.Small,
        outline: 'none',
    },

    '& > select': {
        fontFamily: Kanit,
        padding: vars.space.Small,
        border: `1px solid ${vars.colors.Gray_50}`,
        outline: 'none',
    },

    '& > textarea': {
        resize: 'none',
        height: '5rem',
        outline: 'none',
        fontFamily: Kanit,
        padding: vars.space.Small,
        border: `1px solid ${vars.colors.Gray_50}`,
    }

} as StyleRule)

export const submit = style({
    color: vars.colors.White,
    backgroundColor: vars.colors.Black,
    padding: vars.space.Small,
    fontFamily: Kanit,
    width: '100%',
    border: 'none',
    cursor: 'pointer'
})