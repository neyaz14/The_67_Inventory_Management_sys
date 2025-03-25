
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlinePlus } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SuccessswalTimer from "../../../Components/SuccessswalTimer";
import axios from "axios";
import Swal from "sweetalert2";
// import { Button, input, label, Textarea } from "@/components/ui"; // Adjust based on component path

export default function AddProductModal(isOpen, setIsOpen) {
    //   const [isOpen, setIsOpen] = useState(false);
    const { register, handleSubmit, reset } = useForm();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async (data) => {
        console.log(data);


        try {
            const postedProduct = await axios.post('http://localhost:5000/product/addProduct', data)

            if (postedProduct.status === 200) {
                console.log(postedProduct)
            
            }
        } catch (err) {
            console.log(err)
        }





        // reset();
    };

    return (
        <div>

            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4">
                <div>
                    <label className="text-white">SKU (Unique)</label>
                    <input type="text" {...register("sku")} className="w-full" />
                </div>
                <div>
                    <label className="text-white">Wholesale Min</label>
                    <input type="number" {...register("wholesaleMin")} className="w-full" />
                </div>
                <div>
                    <label className="text-white">Wholesale Max</label>
                    <input type="number" {...register("wholesaleMax")} className="w-full" />
                </div>
                <div>
                    <label className="text-white">Product Name</label>
                    <input type="text" {...register("productName")} className="w-full" />
                </div>
                <div>
                    <label className="text-white">Barcode Number</label>
                    <input type="text" {...register("barcode")} className="w-full" />
                </div>
                <div>
                    <label className="text-white">Stock Quantity</label>
                    <input type="number" {...register("stock")} className="w-full" />
                </div>
                <div>
                    <label className="text-white">Supplier ID</label>
                    <input type="text" {...register("supplierId")} className="w-full" />
                </div>
                <div>
                    <label className="text-white">Cost Price</label>
                    <input type="number" step="0.01" {...register("costPrice")} className="w-full" />
                </div>
                <div>
                    <label className="text-white">Competitor's URL</label>
                    <input type="url" {...register("competitorUrl")} className="w-full" />
                </div>
                <div>
                    <label className="text-white">MRP Min</label>
                    <input type="number" step="0.01" {...register("mrpMin")} className="w-full" />
                </div>
                <div>
                    <label className="text-white">MRP Max</label>
                    <input type="number" step="0.01" {...register("mrpMax")} className="w-full" />
                </div>
                <div>
                    <label className="text-white">Batch Number</label>
                    <input type="text" {...register("batchNumber")} className="w-full" />
                </div>
                <div>
                    <label className="text-white">Image URL</label>
                    <input type="url" {...register("imageUrl")} className="w-full" />
                </div>
                <div className="col-span-2">
                    <label className="text-white">Description</label>
                    <textarea {...register("description")} className="w-full" />
                </div>
                <div className="col-span-2 flex justify-end gap-4">
                    <button className="btn btn-primary" type="submit">Add Product</button>
                </div>
            </form>


        </div>


    );
}
