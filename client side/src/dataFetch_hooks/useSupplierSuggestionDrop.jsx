// import React from 'react';
import useAxiosPublic from '../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useSupplierSuggestionDrop = () => {
    const axiosPublic = useAxiosPublic();

    const { data: SupplierSuggestionsData = [], refetch , isLoading} = useQuery({
        queryKey: ['SupplierSuggestionsData'],
        queryFn: async () => {
            const res = await axiosPublic.get('/supplier/suggestionsSupplier');
            return res.data;
        }
    });
    // console.log(SupplierSuggestionsData.length)
    return [SupplierSuggestionsData, refetch, isLoading];
};

export default useSupplierSuggestionDrop;