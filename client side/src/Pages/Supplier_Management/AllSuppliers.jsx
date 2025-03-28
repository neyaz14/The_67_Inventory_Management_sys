import { useState } from "react";
import AddSupplier from './AddSupplier'
import { AiOutlineClose } from "react-icons/ai";

const suppliers = [
    { id: 1, name: "ABC Suppliers", email: "abc@gmail.com", phone: "1234567890" },
    { id: 2, name: "XYZ Traders", email: "xyz@gmail.com", phone: "9876543210" },
    { id: 3, name: "LMN Wholesalers", email: "lmn@gmail.com", phone: "5678901234" },
];

const AllSuppliers = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);


    return (
        <div className="p-6 bg-gray-900 min-h-screen text-white">
            <button
                className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700"
                onClick={() => setIsModalOpen(true)}
            >
                Add Supplier Details
            </button>
            <div className="mt-6 overflow-hidden rounded-lg  shadow-2xl shadow-cyan-400/10">
                <table className="table table-zebra w-full bg-gray-800 text-white">
                    <thead className="bg-gray-900/70">
                        <tr>
                            <th className="p-3">Name</th>
                            <th className="p-3">Email</th>
                            <th className="p-3">Phone Number</th>
                            <th className="p-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {suppliers.map((supplier) => (
                            <tr key={supplier.id} className="border-b border-gray-700">
                                <td className="p-3">{supplier.name}</td>
                                <td className="p-3">{supplier.email}</td>
                                <td className="p-3">{supplier.phone}</td>
                                <td className="p-3 flex gap-2">
                                    <button className="px-2 py-1  hover:bg-gray-600 rounded">✏️</button>
                                    <button className="px-2 py-1  hover:bg-red-600 rounded">🗑️</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* {isModalOpen && <AddSupplier setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />} */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/35 backdrop-blur-md drop-shadow-2xl ">
                    <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-1/2 relative border border-gray-700">

                        {/* Modal Header */}
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl text-white">Add Product</h2>
                            <button onClick={() => setIsModalOpen(false)} className="text-white">
                                <AiOutlineClose size={20} />
                            </button>
                        </div>

                        {/* Modal Form */}
                        <AddSupplier />

                        {/* Modal Footer */}
                        <div className="flex justify-end gap-2 mt-10">
                            <button onClick={() => setIsModalOpen(false)} className="btn  btn-outline">Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AllSuppliers;