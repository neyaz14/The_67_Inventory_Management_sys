import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";


const useAllSupplierInfo = () => {
    const axiosPublic = useAxiosPublic();

    const { data: allSupplier = [], refetch , isLoading} = useQuery({
        queryKey: ['allSupplier'],
        queryFn: async () => {
            const res = await axiosPublic.get('/supplier/allSupplierInfo');
            return res.data;
        }
    });
    // console.log(allSupplier.length)
    return [allSupplier, refetch, isLoading];
};

export default useAllSupplierInfo;