"use client"

import { UseHandleCreate } from "../hooks/useHandleCreate";

export function DataCreate() {
    const createData = UseHandleCreate();
    return (
        <>
            <div className="parent flex flex-col">
                <h1> create </h1>
                <button
                    className="border"
                    onClick={() => createData("Aiza", "Cute ")}
                >
                    Click Here
                </button>
            </div>
        </>
    );
}