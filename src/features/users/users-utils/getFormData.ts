export const getFormData = (formData: FormData) => {

    const name = formData.get('name') as string
    const description = formData.get('description') as string
    const role = formData.get('role') as string
    const picture = formData.get('picture') as string
    const cover = formData.get('cover') as string

    return { name, description, role, picture, cover }
}