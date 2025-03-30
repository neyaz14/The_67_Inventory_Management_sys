import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SupplierModal = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const axiosPublic = useAxiosPublic();

    const onSubmit =async (data) => {
        console.log(data)

        reset();
        // setIsModalOpen(false)
        try {
                    const supplier = await axiosPublic.post('supplier/addSupplier', data)
        
                    if (supplier.status === 200) {
                        
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
        
    };

    return (
        <div >
            
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Name Field */}
                    <div className="mb-3">
                        <label className="block text-sm">Name:</label>
                        <input
                            type="text"
                            {...register("name", { required: "Name is required" })}
                            className="w-full p-2 bg-gray-700 rounded border border-gray-600 focus:outline-none"
                        />
                        {errors.name && <p className="text-red-400 text-sm">{errors.name.message}</p>}
                    </div>

                    {/* Email Field */}
                    <div className="mb-3">
                        <label className="block text-sm">Email:</label>
                        <input
                            type="email"
                            {...register("email", {
                                required: "Email is required",
                                
                            })}
                            className="w-full p-2 bg-gray-700 rounded border border-gray-600 focus:outline-none"
                        />
                        {errors.email && <p className="text-red-400 text-sm">{errors.email.message}</p>}
                    </div>

                    {/* Phone Number Field */}
                    <div className="mb-4">
                        <label className="block text-sm">Phone Number:</label>
                        <input
                            type="text"
                            {...register("phoneNumber", {
                                required: "Phone number is required",
                                
                            })}
                            className="w-full p-2 bg-gray-700 rounded border border-gray-600 focus:outline-none"
                        />
                        {errors.phone && <p className="text-red-400 text-sm">{errors.phone.message}</p>}
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-between">
                        
                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white py-2 w-full px-4 rounded"
                        >
                            Add Supplier
                        </button>
                    </div>
                </form>
           
        </div>
    );
};

export default SupplierModal;
