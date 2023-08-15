import { Kanit } from "@global/styles/global-styles.css";
import { vars } from "@global/styles/vars.css";
import { StyleRule, style } from "@vanilla-extract/css";

export const form = style({
    padding: vars.space.Medium,
    backgroundColor: vars.colors.White,
    fontFamily: Kanit,
    maxWidth: '500px',

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