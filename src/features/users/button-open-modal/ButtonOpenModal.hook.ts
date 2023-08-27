import { useState } from "react"

export const useOpenModal = () => {
    const [openModal, setOpenModal] = useState(false)

    function handleOpenModal(value: boolean) {
        setOpenModal(value)
    }

    return { openModal, handleOpenModal }
}