'use client';
import { Submit } from "@/components/Submit";
import { addProduct } from "@/mongo-db";
import { error } from "console";
import { redirect } from "next/navigation";
import { useActionState } from "react";
import {FormState, createProduct} from '@/actions/products'




export default function AddProductPage(){

    const initialState: FormState = {
        errors: {},
    }

    const [state, formAction, isPending] = useActionState(createProduct, initialState)

  


    return(
        <form action={formAction} className="p-4 space-y-4 max-w-96">
            <div>
            <label className="text-white">
                Title
                <input type="text" name="title" className="block w-full p-2 border border-white text-white rounded" />
            </label>
            {
                state.errors.title && <p className="text-red-500">{state.errors.title}</p>
            }
            </div>

            <div>
            <label className="text-white">
                Price
                <input type="number" name="price" className="block w-full p-2 border border-white text-white rounded" />
            </label>
            {
                state.errors.price && <p className="text-red-500">{state.errors.price}</p>
            }
            </div>

            <div>
            <label className="text-white">
                Description
                <textarea name="description" className="block w-full p-2 border border-white text-white rounded" />
            </label>
            {
                state.errors.description && <p className="text-red-500">{state.errors.description}</p>
            }
            </div>

            {/* <Submit /> */}
            <button
        type="submit"
        className="w-full p-2 text-white bg-blue-500 rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={isPending}
        >
        Submit
        </button>
        </form>
    )
}