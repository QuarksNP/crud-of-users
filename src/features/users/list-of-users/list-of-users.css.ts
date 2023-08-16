import { vars } from "@global/styles/vars.css";
import { style, styleVariants } from "@vanilla-extract/css";


const baseRole = style({
    textAlign: 'center',
    fontSize: '14px'
})

const roleVariants = {

    admin: {
        padding: vars.space.Smaller,
        borderRadius: '3px',
        color: vars.colors.White,
        backgroundColor: vars.colors.Green
    },

    manager: {
        padding: vars.space.Smaller,
        borderRadius: '3px',
        color: vars.colors.White,
        backgroundColor: vars.colors.Blue
    },

    member: {
        color: vars.colors.Black,
    }
}


export const article = style({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: vars.space.Medium,
})

export const role = styleVariants(roleVariants, (style) => [
    baseRole,
    style
])
