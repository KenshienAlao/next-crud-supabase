import { useHandleAPI } from "./useHandleAPI"

export function UseHandleDelete() {
    const BackendURL = useHandleAPI()
    const handleDelete = async (id: number) => {
        await fetch(`${BackendURL}/api/user/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })

    }
    return handleDelete;

}
