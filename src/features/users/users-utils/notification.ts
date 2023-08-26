import { toast } from "sonner";

export function notification(props: {successMessage:string, errorMessage: string}) {
    const { successMessage, errorMessage } = props
    try {
        toast.success(successMessage)

    } catch (err) {
        toast.error(errorMessage)
    } 
}