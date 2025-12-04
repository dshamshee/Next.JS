import { getProducts } from "@/mongo-db";
import mongoose from "mongoose";
import { ProductDetail } from "./product-detail";




export type Product = {
    _id: mongoose.Types.ObjectId;
    title: string;
    price: number;
    description: string | null;
}

// // Server action wrapper that accepts string ID
// async function deleteProductAction(formData: FormData) {
//     'use server';
//     const idString = formData.get('id') as string;
//     await removeProduct(new mongoose.Types.ObjectId(idString));
// }

export default async function ProductsDBPage({searchParams}: {searchParams: Promise<{query?: string}>}){

    const {query} = await searchParams;
    const productsDocs = await getProducts(query);

 

    // Convert Mongoose documents to plain objects for serialization
    // Keep _id as string for serialization, convert to ObjectId only when needed
    const products = productsDocs.map((productDoc) => {
        const productObj = productDoc.toObject();
        return {
            _id: productObj._id.toString(),
            title: productObj.title,
            price: productObj.price,
            description: productObj.description ?? null,
        };
    });

    return(
       <ProductDetail products={products} />
    )
}