import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import Root from '../Pages/Root';
import Home from '../Pages/Home';

import SignIn from '../Authentication/SignIn';
import PrivateRoute from './PrivateRoute';
import ErrorPage from '../ErrorPage';
import AllProducts from '../Pages/AllProducts/AllProducts';
import CompetitorPrice from '../Pages/Competitor_Price_Monitor/CompetitorPrice';
import InventoryTrack from '../Pages/Inventory_Tracking/InventoryTrack';
import PricingManage from '../Pages/Pricing_Management/PricingManage';
import ReportAnalysis from '../Pages/Report_Analysis/ReportAnalysis';
import OrderManage from '../Pages/Order_Management/OrderManage';
import SupplierManage from '../Pages/Supplier_Management/SupplierManage';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Root></Root>}>
                    <Route path="*" element={<ErrorPage />} />
                    <Route index element={<Home></Home>} />
                    <Route path='login' element={<SignIn></SignIn>} />

                    <Route path='allProducts' element={
                        // <PrivateRoute>
                            <AllProducts></AllProducts>
                        // </PrivateRoute>
                    } />

                    <Route path='competitorPrice' element={
                        <PrivateRoute>
                            <CompetitorPrice></CompetitorPrice>
                        </PrivateRoute>
                    } />

                    <Route path='inventoryTracking' element={
                        <PrivateRoute>
                            <InventoryTrack></InventoryTrack>
                        </PrivateRoute>
                    } />

                    <Route path='pricingManagement' element={
                        <PrivateRoute>
                            <PricingManage></PricingManage>
                        </PrivateRoute>
                    } />

                    <Route path='reportAnalysis' element={
                        <PrivateRoute>
                            <ReportAnalysis></ReportAnalysis>
                        </PrivateRoute>
                    } />

                    <Route path='orderManage' element={
                        <PrivateRoute>
                            <OrderManage></OrderManage>
                        </PrivateRoute>
                    } />

                    <Route path='supplierManage' element={
                        <PrivateRoute>
                            <SupplierManage></SupplierManage>
                        </PrivateRoute>
                    } />

                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
