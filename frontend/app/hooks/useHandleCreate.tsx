import { useHandleAPI } from "./useHandleAPI"

export function UseHandleCreate() {
    const BackendURL = useHandleAPI()

    const createData = async (name: string, role: string) => {
        try {
            await fetch(`${BackendURL}/api/user`, {
                method: "POST",
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

    return createData
}