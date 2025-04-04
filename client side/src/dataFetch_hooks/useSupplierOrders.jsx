
import useAxiosPublic from '../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useSupplierOrders = () => {
    const axiosPublic = useAxiosPublic();

    const { data: orders = [], refetch , isLoading} = useQuery({
        queryKey: ['orders'],
        queryFn: async () => {
            const res = await axiosPublic.get('/supplierOrder/allSupplierOrders');
            return res.data;
        }
    });
    // console.log(orders.length)
    return [orders, refetch, isLoading];
};

export default useSupplierOrders;