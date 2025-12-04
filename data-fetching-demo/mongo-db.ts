import mongoose from "mongoose";
import { connectDB } from "./lib/dbConfig";
import ProductModel from "./models/product";
// import { resolve } from "path";


const seedProducts = async()=>{
    await connectDB();
    const count = await ProductModel.countDocuments();
    if(count === 0){
        await ProductModel.insertMany([
            {title: "Product 1", price: 100, description: "Product 1 description"},
            {title: "Product 2", price: 200, description: "Product 2 description"},
            {title: "Product 3", price: 300, description: "Product 3 description"},
        ]);
        console.log("Products seeded successfully");
    } else {
        console.log("Products already seeded");
    }
    // mongoose.connection.close();
}

seedProducts();

export async function getProducts(query?: string){
    // await connectDB();
    try {
        await new Promise((resolve)=> setTimeout(resolve, 1500))

        if(query){
            return await ProductModel.find({title: {$regex: query, $options: "i"}});
        } else {
            return await ProductModel.find();
        }
    } catch (error) {
        console.error("Error fetching products", error);
        throw error;
    } finally{
        // mongoose.connection.close();
    }
}

export async function getProduct(id: mongoose.Types.ObjectId){
    // await connectDB();
    try {
        await new Promise((resolve)=> setTimeout(resolve, 1500))
        return await ProductModel.findById(id);
    } catch (error) {
        console.error("Error fetching product", error);
        throw error;
    } finally{
        // mongoose.connection.close();
    }
}

export async function addProduct(
    title: string,
    price: number,
    description: string
){
    // await connectDB();
    try {
        await new Promise((resolve)=> setTimeout(resolve, 1500))
        const product = await ProductModel.create({
            title,
            price,
            description
        });
        return product;
    } catch (error) {
        console.error("Error adding product", error);
        throw error;
    } finally{
        // mongoose.connection.close();
    }
}


export async function updateProduct(
    id: mongoose.Types.ObjectId,
    title: string,
    price: number,
    description: string
){
    // await connectDB();
    try {
        await new Promise((resolve)=> setTimeout(resolve, 1500))
        const updatedProduct = await ProductModel.findByIdAndUpdate(id, {title, price, description}, {new: true});
        return updatedProduct;
    } catch (error) {
        console.error("Error updating product", error);
        throw error;
    } finally{
        // mongoose.connection.close();
    }
}


export async function deleteProduct(id: mongoose.Types.ObjectId){
    // await connectDB();
    try {
        await new Promise((resolve)=> setTimeout(resolve, 1500))
        const deletedProduct = await ProductModel.findByIdAndDelete(id);
        return deletedProduct;
    } catch (error) {
        console.error("Error deleting product", error);
        throw error;
    } finally{
        // mongoose.connection.close();
    }
}