import { useState } from "react";
import OrderModal from "./OrderModal";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from 'framer-motion';
import useSupplierOrders from "../../../dataFetch_hooks/useSupplierOrders";
import LoadingSpinner from "../../../Components/LoadingSpinner";
import { FiDelete } from "react-icons/fi";
import { LuPenLine } from "react-icons/lu";
import UpdateOrderModal from "./UpdateOrderModal";

const SupplierOrders = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isUpdateModal, setIsUpModalOpen] = useState(false);
    const [idOfOrder, setidOfOrder] = useState(null)
    const [orders, refetch, isLoading] = useSupplierOrders();
    if (isLoading) return <LoadingSpinner></LoadingSpinner>
    refetch();


    const updateOrder = (id) => {
        console.log('id', id)
        setIsUpModalOpen(true)
        setidOfOrder(id)
       
    }
    const deleteOrder = (id)=>{
        // console.log(id)
    }

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
                                <th>Actions </th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order, index) => (
                                <tr key={index} className="border-b border-gray-700">
                                    <td>{order.sku}</td>
                                    <td>{order.supplierEmail}</td>
                                    <td>{order.batchNumber}</td>
                                    <td>{order.stock}</td>
                                    <td>{order.expiryDate}</td>
                                    <td>{order.deliveredItem}</td>
                                    <td className="flex gap-4">
                                        <button onClick={() => deleteOrder(order._id) }><FiDelete className="text-xl"/></button>
                                        <button onClick={() => updateOrder(order._id) }><LuPenLine className="text-xl"/></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {isModalOpen && (
                <motion.div

                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{
                        position: 'fixed',
                        top: 0, left: 0, right: 0, bottom: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',

                    }}
                    className="fixed inset-0 flex items-center justify-center bg-black/35 backdrop-blur-md drop-shadow-2xl ">
                    <motion.div className="bg-gray-900 p-6 rounded-lg shadow-lg w-1/2 relative border border-gray-700">

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
                    </motion.div>
                </motion.div>
            )}
            {isUpdateModal && (
                <div

                    
                    className="fixed inset-0 flex items-center justify-center bg-black/35 backdrop-blur-md drop-shadow-2xl ">
                    <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-1/2 relative border border-gray-700">

                        {/* Modal Header */}
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-bold">Update the Order</h3>
                            <button onClick={() => setIsUpModalOpen(false)} className="text-white">
                                <AiOutlineClose size={20} />
                            </button>
                        </div>

                        {/* Modal Form */}
                        <UpdateOrderModal id={idOfOrder}/>

                        {/* Modal Footer */}
                        <div className="flex justify-end gap-2 mt-4">
                            <button onClick={() => setIsUpModalOpen(false)} className="btn btn-outline">Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SupplierOrders;
