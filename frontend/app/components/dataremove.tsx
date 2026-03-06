"use client"
import { UseHandleDelete } from "../hooks/useHandleDelete";

export function DataRemove() {
    const handleDelete = UseHandleDelete()
    return (
        <>
            <div className="parent flex flex-col">
                Remove
                <button
                    onClick={() => handleDelete(1)}
                    className="ring-2">
                    Remove Here
                </button>
            </div>
        </> 
    );
}