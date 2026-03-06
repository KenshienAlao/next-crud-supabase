
import { useHandleAPI } from "./useHandleAPI";

export function UseHandleUpdate() {
    const BackendURL = useHandleAPI()
    const UpdateUser = async (id: number, name: string, role: string) => {
        try {
            await fetch(`${BackendURL}/api/user/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    role,
                })
            })
        } catch (err) {
            console.error(err)
        }
    }
    return UpdateUser
}