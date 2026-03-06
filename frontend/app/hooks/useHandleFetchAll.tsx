"use client"
import { useHandleAPI } from "./useHandleAPI";
import { useEffect, useState } from "react";

interface MessageProps {
    id: number,
    name: string,
    role: string,
}


export function UseHandleFetchAll() {
    const BackendURL = useHandleAPI();
    const [message, setMessage] = useState<MessageProps[]>([]);

    useEffect(() => {
        const fetchAll = async () => {
            try {
                const res = await fetch(`${BackendURL}/api/user`);
                const info = await res.json();
                setMessage(info.data)
            } catch (err) {
                setMessage(err as unknown as MessageProps[])
            }
        }
        fetchAll();
    }, [BackendURL])
    return message;
}