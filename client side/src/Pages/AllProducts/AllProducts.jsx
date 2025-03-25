import React, { useState } from "react";
// import { EyeIcon, PencilIcon, TrashIcon } from "@heroicons/react/outline";
import { CiEdit } from "react-icons/ci";
import { GrView } from "react-icons/gr";
import { FiDelete } from "react-icons/fi";
import AddProductModal from "./Components/AddProductModal";
import { AiOutlineClose } from "react-icons/ai";

const products = [
    { sku: "P001", name: "Organic Almonds", stock: 150, cost: "$5.00", mrp: "$7.00 - $9.00", batch: "BATCH123", wholesale: "$6.00 - $8.00", expiry: "2024-05-22" },
    { sku: "P002", name: "Whole Wheat Bread", stock: 200, cost: "$2.00", mrp: "$3.00 - $4.00", batch: "BATCH124", wholesale: "$2.50 - $3.50", expiry: "2023-12-15" },
    { sku: "P003", name: "Almond Milk", stock: 100, cost: "$3.50", mrp: "$4.50 - $6.00", batch: "BATCH125", wholesale: "$4.00 - $5.00", expiry: "2024-01-10" },
    { sku: "P004", name: "Peanut Butter", stock: 120, cost: "$4.00", mrp: "$5.00 - $6.50", batch: "BATCH126", wholesale: "$4.50 - $5.50", expiry: "2024-03-18" },
    { sku: "P005", name: "Quinoa", stock: 80, cost: "$6.00", mrp: "$8.00 - $10.00", batch: "BATCH127", wholesale: "$7.00 - $9.00", expiry: "2025-02-28" },
    { sku: "P006", name: "Chia Seeds", stock: 90, cost: "$7.00", mrp: "$9.00 - $11.00", batch: "BATCH128", wholesale: "$8.00 - $10.00", expiry: "2024-06-12" }
];

const ProductList = () => {
    const [isOpen, setIsOpen] = useState(false)
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
                        <tr>
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
                        {products.map((product, index) => (
                            <tr key={index}>
                                <td>{product.sku}</td>
                                <td>{product.name}</td>
                                <td>{product.stock}</td>
                                <td>{product.cost}</td>
                                <td>{product.mrp}</td>
                                <td>{product.batch}</td>
                                <td>{product.wholesale}</td>
                                <td>{product.expiry}</td>
                                <td className="flex gap-2">
                                    <button className="btn btn-sm btn-outline"><GrView /></button>
                                    <button className="btn btn-sm btn-outline"><CiEdit /></button>
                                    <button className="btn btn-sm btn-outline btn-error"><FiDelete /></button>
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
