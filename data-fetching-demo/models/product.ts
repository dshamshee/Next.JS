import mongoose from "mongoose";
type Product = {
    id: string;
    title: string;
    price: number;
    description: string;
}


const productSchema = new mongoose.Schema<Product>({
    title: {type: String, required: true},
    price: {type: Number, required: true},
    description: {type: String, required: true},
});

const ProductModel = mongoose.models.Product || mongoose.model<Product>("Product", productSchema);

export default ProductModel;