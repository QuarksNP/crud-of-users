import { StyleRule, style } from "@vanilla-extract/css";

import { baseGreenColorTransition } from "@global/styles";

import { Kanit } from "@global/styles/global-styles.css";

import { vars } from "@global/styles/vars.css";


export const article = style({
    position: "fixed",
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    maxWidth: '460px',
    borderRadius: '5px',
    padding: vars.space.Medium,
    backgroundColor: vars.colors.Black_600,
    color: vars.colors.White,
    fontFamily: Kanit,
    zIndex: 30
})

export const close = style({
    display: 'flex',
    justifyContent: 'end',

    '& > button': {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        color: vars.colors.White
    }
} as StyleRule)

export const title = style({
    fontSize: '20px'
})

export const fieldset = style({
    display: 'flex',
    flexDirection: 'column',
    border: 'none',
    margin: `${vars.space.Medium} 0`,
    color: vars.colors.White,
    gap: vars.space.Large,

} as StyleRule)

export const container_info = style({
    display: 'flex',
    gap: vars.space.Large,

    '& > div': {
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'column',

        '& > input, select': {
            fontFamily: Kanit,
            outline: 'none',
            border: 'none',
            background: 'none',
            color: vars.colors.White,
            borderBottom: `1px solid ${vars.colors.Gray_50}`,
        },

    }

} as StyleRule)

export const container_url = style({
    display: 'flex',
    flexDirection: 'column',
    gap: vars.space.Large,


    '& > div': {
        display: 'flex',
        flexDirection: 'column',

        '& > input': {
            fontFamily: Kanit,
            outline: 'none',
            border: 'none',
            background: 'none',
            borderBottom: `1px solid ${vars.colors.Gray_50}`,
            color: vars.colors.White,
        },
    }
} as StyleRule)

export const container_desc = style({
    display: 'flex',
    flexDirection: 'column',
    
    '& > textarea': {
        resize: 'none',
        height: '5rem',
        outline: 'none',
        borderRadius: '5px',
        border: `1px solid ${vars.colors.Gray_50}`,
        fontFamily: Kanit,
        padding: vars.space.Small,
    }
} as StyleRule)

export const submit = style([baseGreenColorTransition, {
    color: vars.colors.White,
    padding: vars.space.Small,
    fontFamily: Kanit,
    borderRadius: '5px',
    width: '100%',
    border: 'none',
    cursor: 'pointer',
 
} as StyleRule])