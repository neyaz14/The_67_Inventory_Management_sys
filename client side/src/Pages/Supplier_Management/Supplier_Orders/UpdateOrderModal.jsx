/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { motion } from 'framer-motion';
// import LoadingSpinner from "../../../Components/LoadingSpinner";

const UpdateOrderModal = ({id}) => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
   
    const onFormSubmit = async (data) => {
        console.log(data);

        try {
            const newOrder = await axiosPublic.put(`supplierOrder/allSupplierOrders/${id}`, data)

            if (newOrder.status === 200) {

                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "You have successfully added a new Order from supplier ",
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
        reset();
    };

    // !
    // TODO : fix the update input box 
    return (
        <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            style={{
             
              padding: '20px',
              borderRadius: '8px'
            }}
        >

            <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-4 p-6 mt-4">
              <h1>{id}</h1>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Cost Price per unit</span>
                    </label>
                    <input {...register("costPrice")} type="number" placeholder="cost per unit" className="input input-bordered w-full" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Batch Number</span>
                    </label>
                    <input {...register("batchNumber")} placeholder="67" className="input input-bordered w-full" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Stock Quantity</span>
                    </label>
                    <input {...register("stock")} type="number" placeholder="420" className="input input-bordered w-full" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Delivered Item</span>
                    </label>
                    <input {...register("deliveredItem")} type="number" className="input input-bordered w-full" placeholder="Update the deliveried item number" required />
                </div>

               

                <button type="submit" className="btn btn-primary w-full">Submit</button>
            </form>


        </motion.div>
    );
};

export default UpdateOrderModal;





// export default UpdateOrderModal;