import { vars } from "@global/styles/vars.css";
import { StyleRule, style, styleVariants } from "@vanilla-extract/css";


const roleVariants = {

    admin: {
        padding: vars.space.Smaller,
        borderRadius: '5px',
        color: vars.colors.White,
        backgroundColor: vars.colors.Green
    },

    manager: {
        padding: vars.space.Smaller,
        borderRadius: '5px',
        color: vars.colors.White,
        backgroundColor: vars.colors.Blue
    },

    member: {
        color: vars.colors.Gray_50,
    }
}

const baseRole = style({
    width: '5rem',
    textAlign: 'center',
    fontSize: '14px'
})

export const section = style({
    position: 'relative',
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'start',
    justifyContent: 'space-between',
    boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)',
    borderRadius: '5px',
    backgroundColor: vars.colors.Black_400,
    color: vars.colors.White,
})


export const actionsContainer = style({
    display: 'flex',
    position: 'absolute',
    opacity: '0',
    borderRadius: '5px',
    pointerEvents: 'none',
    transition: 'opacity 0.2s ease',
    zIndex: 10,
    background: vars.colors.Green,
    margin: vars.space.Medium,
    padding: `${vars.space.Smaller} ${vars.space.Small}`,
    gap: vars.space.Medium,

    '& > button': {
        width: '25px',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        color: vars.colors.White,
    },

    selectors: {
        [`${section}:hover &`]: {
            opacity: '1',
            pointerEvents: 'auto',
        }
    }
} as StyleRule)

export const descContainer = style({
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'start',
    gap: vars.space.Medium
})

export const pictures_container = style({
    borderRadius: '5px',
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    width: '100%',
    height: '8rem',

    '& > img': {
        objectFit: 'cover',
    }
} as StyleRule)

export const profile_cover = style({
    borderRadius: '5px 5px 0 0',
    position: 'absolute',
    width: '100%',
    height: '100%',
})

export const profile_picture = style({
    position: 'absolute',
    width: '60px',
    height: '60px',
    borderRadius: '100%',
    top: '100px'
})

export const basicDesc = style({
    display: 'flex',
    flexDirection: 'column',
    height: '12rem',
    padding: vars.space.Medium,
})

export const name = style({
    fontSize: '18px',
    fontWeight: 'normal',
})

export const description = style({
    color: vars.colors.Gray_50,
    marginTop: vars.space.Medium,
    overflow: 'auto'

})

export const role = styleVariants(roleVariants, (style) => [
    baseRole,
    style
])



