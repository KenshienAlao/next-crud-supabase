"use client"
import { UseHandleUpdate } from "../hooks/useHandleUpdate";

export function DataUpdate() {
    const UpdateUser = UseHandleUpdate()
    return (
        <>
            <div className="parent flex flex-col">
                Update
                <button
                    onClick={() => UpdateUser(18, "MiniAiza", "Baby")}
                    className="border">
                    Update Here
                </button>
            </div>
        </>
    );
}