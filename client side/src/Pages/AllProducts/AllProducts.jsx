import React, { useState } from "react";
// import { EyeIcon, PencilIcon, TrashIcon } from "@heroicons/react/outline";
import { CiEdit } from "react-icons/ci";
import { GrView } from "react-icons/gr";
import { FiDelete } from "react-icons/fi";
import AddProductModal from "./Components/AddProductModal";
import { AiOutlineClose } from "react-icons/ai";
import useAllProducts from "../../dataFetch_hooks/useAllProducts";
import axios from "axios";
import LoadingSpinner from "../../Components/LoadingSpinner";
import Swal from "sweetalert2";



const ProductList = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [products, refetch, isLoading] = useAllProducts();
    if(isLoading) return <LoadingSpinner></LoadingSpinner>
    // ! --- Auto refetch is not working 
    // TODO : fix auto refetch()
    refetch();



    


    // ! --------  Delete Products 
    const handleDelete=(id)=>{
        // console.log('delete', id)
        Swal.fire({
            title: "Do you want to Delete the product ?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Delete",
            denyButtonText: `Don't Delete`
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/product/allProducts/${id}`)
                .then(res=>{
                  console.log('deleted successfully ')
                  Swal.fire("Successfully Deleted the prodcut !", "", "b");
                })
              
            } else if (result.isDenied) {
              Swal.fire("Product is not deleted ! ", "", "success");
            }
          });

       
    }


    return (
        <div className="p-6 bg-gray-900 min-h-screen text-white">
            <div className="flex justify-between mb-4">


                <button
                    onClick={() => { setIsOpen(true) }}
                    className="btn btn-primary">Add Product</button>


                <div className="flex gap-2">
                    <input type="text" placeholder="Search by Name or SKU" className="input input-bordered text-white " />
                    <select className="select select-bordered">
                        <option>Stock Quantity</option>
                        <option>Cost Price</option>
                        <option>Expiry Date</option>
                    </select>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="table table-zebra w-full bg-gray-800 text-white">
                    <thead>
                        <tr >
                            <th>SKU</th>
                            <th>Product Name</th>
                            <th>Stock Quantity</th>
                            <th>Cost Price</th>
                            <th>MRP Range</th>
                            <th>Batch Number</th>
                            <th>Wholesale Price Range</th>
                            <th>Expiry Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products?.map((product, index) => (
                            <tr key={index} >
                                <td>{product?.sku}</td>
                                <td>{product?.productName}</td>
                                <td>{product?.stock}</td>
                                <td>{product?.costPrice}</td>
                                <td>{product?.mrpMin} - {product?.mrpMax}</td>
                                <td>{product?.batchNumber}</td>
                                <td>{product?.wholesaleMin} - {product?.wholesaleMax}</td>
                                <td></td>
                                <td className="flex gap-2">
                                    <button className="btn btn-sm btn-outline"><GrView /></button>
                                    <button className="btn btn-sm btn-outline"><CiEdit /></button>
                                    <button onClick={()=>handleDelete(product._id)} className="btn btn-sm btn-outline btn-error"><FiDelete /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/35 backdrop-blur-md drop-shadow-2xl ">
                    <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-1/2 relative border border-gray-700">

                        {/* Modal Header */}
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl text-white">Add Product</h2>
                            <button onClick={() => setIsOpen(false)} className="text-white">
                                <AiOutlineClose size={20} />
                            </button>
                        </div>

                        {/* Modal Form */}
                        <AddProductModal />

                        {/* Modal Footer */}
                        <div className="flex justify-end gap-2 mt-4">
                            <button onClick={() => setIsOpen(false)} className="btn btn-outline">Cancel</button>
                        </div>
                    </div>
                </div>
            )}



        </div>
    );
};

export default ProductList;
