import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

import useSupplierSuggestionDrop from "../../../dataFetch_hooks/useSupplierSuggestionDrop";

import LoadingSpinner from "../../../Components/LoadingSpinner";

const OrderModal = () => {
    const { register, handleSubmit, reset } = useForm();
    // const axiosPublic = useAxiosPublic();
    const [SupplierSuggestionsData, refetch, isLoading] = useSupplierSuggestionDrop();
    if(isLoading) return <LoadingSpinner></LoadingSpinner>
    refetch();
    const onFormSubmit = async (data) => {
        console.log(data);

        // try {
        //     const newOrder = await axiosPublic.post('supplierOrder/addSupplierOrder', data)

        //     if (newOrder.status === 200) {

        //         Swal.fire({
        //             position: "center",
        //             icon: "success",
        //             title: "You have successfully added a new Order from supplier ",
        //             timer: 1650,
        //             background: '#111',
        //             color: '#fff',
        //             showConfirmButton: false,
        //             showClass: {
        //                 popup: `
        //                                           animate__animated
        //                                           animate__fadeInUp
        //                                           animate__faster
        //                                                           `
        //             },
        //             hideClass: {
        //                 popup: `
        //                                           animate__animated
        //                                           animate__fadeOutDown
        //                                           animate__faster
        //                                         `
        //             }
        //         });

        //     }
        // } catch (err) {
        //     console.log(err)
        // }
        reset();
    };

    return (
        <div >

            <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-4 p-6 mt-4">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">SKU</span>
                    </label>
                    <input {...register("sku")} placeholder="P014" className="input input-bordered w-full" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Supplier Email</span>
                    </label>
                    <input {...register("supplierEmail")} type="email" placeholder="supplier@gmail.com" className="input input-bordered w-full" required />
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
                    <input {...register("stockQuantity")} type="number" placeholder="420" className="input input-bordered w-full" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Expiry Date</span>
                    </label>
                    <input {...register("expiryDate")} type="date" className="input input-bordered w-full" required />
                </div>
                
                <div className="form-control">
                <legend className="fieldset-legend">Select a Supplier </legend>
                    <select defaultValue="Pick a color" className="select w-full " {...register("supplierId")}>
                        {
                            SupplierSuggestionsData.map(s=>(
                                <option key={s._id} value={s._id}>{s.name}</option>
                            ))
                        }
                        
                    </select>
                </div>

                <button type="submit" className="btn btn-primary w-full">Submit</button>
            </form>


        </div>
    );
};

export default OrderModal;

