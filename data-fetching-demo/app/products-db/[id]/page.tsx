
import { getProduct } from '@/mongo-db';
import EditProductForm from './product-edit-form';
import { Product } from "@/app/products-db/page";
import { notFound } from 'next/navigation';
import mongoose from 'mongoose';





export default async function EditProductPage({params}: {params: Promise<{id: string}>}){

    const {id} = await params;
    const productDoc = await getProduct(new mongoose.Types.ObjectId(id))

    if(!productDoc){
        notFound();
    }

    // You can't pass the mongoose document to the Client Component directly because it is not serializable.
    
    // Convert Mongoose document to plain object for Client Component
    // toObject() converts the document to a plain object (serializable)
    const productObj = productDoc.toObject();
    // Create a plain object with all fields - _id will be serialized as string
    const product = {
        _id: productObj._id.toString(),
        title: productObj.title,
        price: productObj.price,
        description: productObj.description ?? null,
    } as Product

    return(
       <EditProductForm product={product} />
    )
}