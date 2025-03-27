
import { useForm } from "react-hook-form";

import useAxiosSecure from "../../../hooks/useAxiosSecure";

import axios from "axios";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";



export default function AddProductModal(isOpen, setIsOpen) {

    const { register, handleSubmit, reset } = useForm();
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();
    
    const onSubmit = async (data) => {
        // console.log(data);


        try {
            const postedProduct = await axiosPublic.post('product/addProduct', data)

            if (postedProduct.status === 200) {
                // console.log(postedProduct)
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "You have successfully added a new Product",
                    timer: 1650,
                    background: '#111',
                    color: '#fff',
                    showConfirmButton: false,
                    showClass: {
                        popup: `
                                          animate__animated
                                          animate__fadeInUp
                                          animate__faster
                                        `
                    },
                    hideClass: {
                        popup: `
                                          animate__animated
                                          animate__fadeOutDown
                                          animate__faster
                                        `
                    }
                });

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
