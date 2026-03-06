"use client"
import { UseHandleFetchAll } from "../hooks/useHandleFetchAll";

export function DataFetchAll() {
    const message = UseHandleFetchAll()

    return (
        <>
            <div className="parent flex flex-col">
                {message?.map((msg, i) => (
                    <div key={i}>
                        {msg.id}-{msg.name}-{msg.role}
                    </div>

                ))}
            </div>
        </>
    );
}