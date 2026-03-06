"use client"
import { UseHandleFetchSingle } from "../hooks/useHandleFetchSingle";

export function DataFetchSingle() {
    const { FetchSingle, message, isFetch } = UseHandleFetchSingle()

    return (
        <>
            <div className="parent flex flex-col gap-5">
                {isFetch && (
                    <div>
                        {message?.id}-{message?.name}-{message?.role}
                    </div>
                )}
                <button className="border p-2" onClick={() => FetchSingle(1)}>
                    Click Here to fetch
                </button>
            </div>
        </>
    );
}