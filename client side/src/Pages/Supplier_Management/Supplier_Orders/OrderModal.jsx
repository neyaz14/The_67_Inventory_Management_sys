import { useForm } from "react-hook-form";

const OrderModal = () => {
    const { register, handleSubmit, reset } = useForm();

    const onFormSubmit = (data) => {
        console.log(data)
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

                <button type="submit" className="btn btn-primary w-full">Submit</button>
            </form>


        </div>
    );
};

export default OrderModal;
