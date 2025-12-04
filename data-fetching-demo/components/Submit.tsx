'use client';

import { useFormStatus } from "react-dom";


export const Submit = ()=>{
    const {pending} = useFormStatus();

    return(
        <button
        type="submit"
        className="w-full p-2 text-white bg-blue-500 rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={pending}
        >
        Submit
        </button>
    )
}