import React from 'react';
import { useParams } from 'react-router';
import useAllProducts from '../../dataFetch_hooks/useAllProducts';
import LoadingSpinner from '../../Components/LoadingSpinner';
import { FaBarcode, FaBoxOpen, FaHeart, FaShoppingCart, FaStar, FaTag } from 'react-icons/fa';

const ProductDetails = () => {
    const { id } = useParams();
    const [allProducts, refetch, isLoading] = useAllProducts();
    if (isLoading) return <LoadingSpinner></LoadingSpinner>

    const [productData] = allProducts.filter(product => id === product._id)

    // console.log(productData , allProducts.length)
    // refetch()

    return (
        <div>
            <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-[80%] mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-8 p-8">
                        {/* Product Image */}
                        <div className="relative">
                            <div className="w-96 h-96 bg-blue-950  rounded-lg p-4 flex items-center justify-center">
                                <img
                                    src={productData.imageURL}
                                    alt={productData.productName}
                                    className="max-w-full h-auto object-contain rounded-lg"
                                />

                            </div>
                        </div>

                        {/* Product Details */}
                        <div className="space-y-6 flex flex-wrap">
                            <div className=''>
                                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                                    {productData.productName}
                                </h1>
                                <p className='text-xl'>SKU: {productData.sku}</p>


                                {/* Description */}
                                <p className="text-gray-600 dark:text-gray-300 opacity-65 mb-4">
                                    {productData.description}
                                </p>

                                

                                {/* Stock */}
                                <div className="my-8  ">
                                    <span className="font-semibold text-xl text-gray-800 dark:text-white">
                                        Availability:
                                    </span>

                                    {
                                        productData.stock < 25 
                                        ?<span className='text-red-400 text-2xl font-medium '>  ({productData.stock} units)</span> 
                                        :<span className='text-green-500 text-xl '>  ({productData.stock} units)</span>
                                    }
                                    
                                </div>



                                {/* Pricing Section */}
                                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mb-4">
                                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3 flex items-center">
                                        <FaTag className="mr-2 text-blue-500" /> Pricing Details
                                    </h3>
                                    <div className="space-y-2">

                                        <div className="flex justify-between">
                                            <span className="text-gray-600 dark:text-gray-300">Cost Price</span>
                                            <span className="text-gray-700 dark:text-gray-200">
                                                ${productData?.costPrice?.toFixed(2)}
                                            </span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600 dark:text-gray-300">Wholesale Price (Min)</span>
                                            <span className="text-gray-700 dark:text-gray-200">
                                                ${productData?.wholesaleMin?.toFixed(2)}
                                            </span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600 dark:text-gray-300">Wholesale Price (Max)</span>
                                            <span className="text-gray-700 dark:text-gray-200">
                                                ${productData?.wholesaleMax?.toFixed(2)}
                                            </span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600 dark:text-gray-300">MRP (Min)</span>
                                            <span className="text-gray-700 dark:text-gray-200">
                                                ${productData?.mrpMin?.toFixed(2)}
                                            </span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600 dark:text-gray-300">MRP (Max)</span>
                                            <span className="text-gray-700 dark:text-gray-200">
                                                ${productData?.mrpMax?.toFixed(2)}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Supplier and Batch Information */}
                                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mb-4">
                                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3 flex items-center">
                                        <FaBoxOpen className="mr-2 text-blue-500" /> Product Information
                                    </h3>
                                    <div className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center">
                                                <FaBarcode className="mr-2 text-gray-500" />
                                                <span className="text-gray-600 dark:text-gray-300">Supplier ID</span>
                                            </div>
                                            <span className="font-medium text-gray-800 dark:text-white">
                                                {productData?.supplierId}
                                            </span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center">
                                                <FaBoxOpen className="mr-2 text-gray-500" />
                                                <span className="text-gray-600 dark:text-gray-300">Batch Number</span>
                                            </div>
                                            <span className="font-medium text-gray-800 dark:text-white">
                                                {productData?.batchNumber}
                                            </span>
                                        </div>
                                    </div>
                                </div>



                                {/* Additional Info */}
                                <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">

                                    <p>Category: </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 my-5">
                <div className='w-[80%] mx-auto bg-white dark:bg-gray-800 px-5 py-10 shadow-lg rounded-lg overflow-hidden'>

                    <h1>Competitors Price History </h1>
                </div>

            </div>
        </div>
    );
};

export default ProductDetails;