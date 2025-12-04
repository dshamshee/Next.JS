'use client';

import { useActionState } from "react";
import {FormState, editProduct} from '@/actions/products'
import { Product } from "@/app/products-db/page";
import mongoose from "mongoose";




export default function EditProductForm({product}: {product: Product}){


    const initialState: FormState = {
        errors: {},
    }

    const editProductwithId = editProduct.bind(null, product._id)

    const [state, formAction, isPending] = useActionState(editProductwithId, initialState)

  


    return(
        <form action={formAction} className="p-4 space-y-4 max-w-96">
        {/* <input type="hidden" name="id" value={product._id.toString()} /> */}

            <div>
            <label className="text-white">
                Title
                <input type="text" defaultValue={product.title} name="title" className="block w-full p-2 border border-white text-white rounded" />
            </label>
            {
                state.errors.title && <p className="text-red-500">{state.errors.title}</p>
            }
            </div>

            <div>
            <label className="text-white">
                Price
                <input type="number" defaultValue={product.price} name="price" className="block w-full p-2 border border-white text-white rounded" />
            </label>
            {
                state.errors.price && <p className="text-red-500">{state.errors.price}</p>
            }
            </div>

            <div>
            <label className="text-white">
                Description
                <textarea name="description" defaultValue={product.description ?? ""} className="block w-full p-2 border border-white text-white rounded" />
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