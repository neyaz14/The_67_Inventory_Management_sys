import AllSuppliers from "./AllSuppliers";
import SupplierOrders from "./Supplier_Orders/SupplierOrders";

const SupplierManage = () => {




    return (
        <div className="">
            <div className="my-5 mb-14">
                <h1 className=" text-3xl font-semibold opacity-70 text-white text-center">All Suppliers</h1>
                <AllSuppliers></AllSuppliers>
            </div>

            <div className="  my-5">
                <h1 className=" text-3xl font-semibold opacity-70 text-white text-center">Orders</h1>

                <SupplierOrders></SupplierOrders>
            </div>

        </div>
    );
};

export default SupplierManage;