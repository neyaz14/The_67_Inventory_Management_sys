
import  useAllProducts  from '../../../dataFetch_hooks/useAllProducts';
import LoadingSpinner from '../../../Components/LoadingSpinner';

const StockOverview = () => {
    const [products, refetch, isLoading] = useAllProducts();

    if (isLoading) return <LoadingSpinner></LoadingSpinner>
    refetch();
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Inventory tracking</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>SKU</th>
                            <th>Stock</th>
                            <th>Expiry Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products?.map((product) => (
                            <tr key={product.id}>
                                <td>{product.productName}</td>
                                <td>{product.sku}</td>
                                <td>{product.stock}</td>
                                <td>{product.expiryDate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StockOverview;
