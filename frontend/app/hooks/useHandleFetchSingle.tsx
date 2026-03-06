"use client"
import { useState } from "react";
import { useHandleAPI } from "./useHandleAPI";


interface MessageProps {
    id: number,
    name: string,
    role: string,
}


export function UseHandleFetchSingle() {
    const [isFetch, setIsFetch] = useState(false);
    const [message, setMessage] = useState<MessageProps | null>(null)
    const BackendURL = useHandleAPI();

    const FetchSingle = async (id: number) => {
        try {
            const res = await fetch(`${BackendURL}/api/user/${id}`)
            const info = await res.json()
            setMessage(info.data)
            setIsFetch(true)
        } catch (err) {
            setMessage(err as unknown as MessageProps)
        }
    }


    return { FetchSingle, message, isFetch }
}