import { useState } from "react";
import OrderModal from "./OrderModal";
import { AiOutlineClose } from "react-icons/ai";


const sampleOrders = [
    {
        sku: "PROD12345",
        supplierEmail: "supplier1@example.com",
        batchNumber: "BATCH001",
        stockQuantity: 100,
        expiryDate: "2025-12-31",
        deliveredItem: 0,
    },
    {
        sku: "PROD67890",
        supplierEmail: "supplier2@example.com",
        batchNumber: "BATCH002",
        stockQuantity: 250,
        expiryDate: "2026-06-15",
        deliveredItem: 50,
    },
    {
        sku: "PROD54321",
        supplierEmail: "supplier3@example.com",
        batchNumber: "BATCH003",
        stockQuantity: 75,
        expiryDate: "2025-09-10",
        deliveredItem: 10,
    },
];


const SupplierOrders = () => {
    //   const [orders, setOrders] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);



    return (
        <div className="p-6   text-white">
            <div className="card bg-gray-800 shadow-xl p-4">
                <div className="flex justify-between items-center mx-4 mb-4">
                    <h2 className="text-xl font-semibold">Supplier Orders</h2>
                    <button onClick={() => setIsModalOpen(true)} className="btn btn-primary">
                        Add New Order
                    </button>
                </div>
                <div className="overflow-x-auto shadow-2xl shadow-cyan-400/10 rounded-2xl">
                    <table className="table w-full table-zebra ">
                        <thead className="bg-gray-700">
                            <tr>
                                <th>SKU</th>
                                <th>Supplier Email</th>
                                <th>Batch Number</th>
                                <th>Stock Quantity</th>
                                <th>Expiry Date</th>
                                <th>Delivered Item</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sampleOrders.map((order, index) => (
                                <tr key={index} className="border-b border-gray-700">
                                    <td>{order.sku}</td>
                                    <td>{order.supplierEmail}</td>
                                    <td>{order.batchNumber}</td>
                                    <td>{order.stockQuantity}</td>
                                    <td>{order.expiryDate}</td>
                                    <td>{order.deliveredItem}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {isModalOpen && (
                            <div className="fixed inset-0 flex items-center justify-center bg-black/35 backdrop-blur-md drop-shadow-2xl ">
                                <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-1/2 relative border border-gray-700">
            
                                    {/* Modal Header */}
                                    <div className="flex justify-between items-center">
                                    <h3 className="text-lg font-bold">Add New Order</h3>
                                        <button onClick={() => setIsModalOpen(false)} className="text-white">
                                            <AiOutlineClose size={20} />
                                        </button>
                                    </div>
            
                                    {/* Modal Form */}
                                    <OrderModal />
            
                                    {/* Modal Footer */}
                                    <div className="flex justify-end gap-2 mt-4">
                                        <button onClick={() => setIsModalOpen(false)} className="btn btn-outline">Cancel</button>
                                    </div>
                                </div>
                            </div>
                        )}
        </div>
    );
};

export default SupplierOrders;
