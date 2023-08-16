export const getFormData = (formData: FormData) => {

    const name = formData.get('name') as string
    const role = formData.get('role') as string
    const picture = formData.get('picture') as string

    return { name, role, picture }
}