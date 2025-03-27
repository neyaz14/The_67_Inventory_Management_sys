import React from 'react';
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from '../hooks/useAxiosPublic';


const useAllProducts = () => {
    const axiosPublic = useAxiosPublic();
     

    // ! --- Auto refetch is not working 
    // TODO : fix auto refetch()
    const { data: products = [], refetch , isLoading} = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await axiosPublic.get('/product/allProducts');
            return res.data;
        }
    });
    // console.log(products)
    return [products, refetch, isLoading];
};

export default useAllProducts;