import { Modal } from "@users-types/types"
import { useState } from "react"

export const useOpenModal = () => {
    const [openModal, setOpenModal] = useState<Modal>({
        openCreateUserModal: false,
        openUpdateUserModal: false,

    })

    function handleOpenModal(props: { openCreateUserModal?: boolean, openUpdateUserModal?: boolean }) {
        setOpenModal({
            ...props
        })
    }

    return { openModal, handleOpenModal }
}