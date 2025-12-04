'use client';
import { removeProduct } from "@/actions/products";
import mongoose from "mongoose";
import Form from "next/form";
import Link from "next/link";
import { useOptimistic } from "react";


export type Product = {
    _id: mongoose.Types.ObjectId;
    title: string;
    price: number;
    description: string | null;
}

// Server action wrapper that accepts string ID
// async function deleteProductAction(formData: FormData) {
//     'use server';
//     const idString = formData.get('id') as string;
//     await removeProduct(new mongoose.Types.ObjectId(idString));
// }

export const ProductDetail = ({products}: {products: Product[]})=>{

    const [optimisticProducts, setOptimisticProducts] = useOptimistic(products, (currentProducts, productId: mongoose.Types.ObjectId)=>{
        return currentProducts.filter((product)=> product._id.toString() !== productId.toString())
    })

    const removeProductById = async (productId: mongoose.Types.ObjectId)=>{
        setOptimisticProducts(productId)
        await removeProduct(productId)
    }

    // Convert Mongoose documents to plain objects for serialization
    // Keep _id as string for serialization, convert to ObjectId only when needed
    // const productss = products.map((product) => {
    //     return product._id.toString();
    // });

    return(
        <ul className="space-y-4 p-4">
            {
                optimisticProducts.map((product)=>(
                    <li key={product._id.toString()} className="p-4 bg-white shadow-md rounded-lg text-gray-700">
                        <h2 className="text-xl font-semibold">
                            <Link href={`/products-db/${product._id}`}>{product.title}</Link>
                        </h2>
                        <p>{product.description}</p>
                        <p className="text-lg font-medium">₹{product.price}</p>
                        <Form action={removeProductById.bind(null, product._id)}>
                            <input type="hidden" name="id" value={product._id.toString()} />
                            <button type="submit" className="bg-red-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-red-600">
                                Delete
                            </button>
                        </Form>
                    </li>
                ))
            }
        </ul>
    )
}