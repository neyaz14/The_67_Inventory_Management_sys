import { useForm } from "react-hook-form";

const SupplierModal = ({  setIsModalOpen}) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data)

        reset();
        // setIsModalOpen(false)
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
                            {...register("phone", {
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
