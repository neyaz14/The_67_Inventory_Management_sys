import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../Providers/AuthContext';


const Navbar = () => {

    const { user, signOutUser } = useContext(AuthContext);

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                // console.log('successful sign out')
            })
            .catch(error => {
                console.log('failed to sign out .stay here. dont leave me alone')
            })
    }

    const links = <>
        <li className='opacity-95 '><NavLink to="/">Home</NavLink></li>
        <li className='opacity-95 '><NavLink to="/allProducts">All Products</NavLink></li>
        <li className='opacity-95 '><NavLink to="/competitorPrice">Competitor Price</NavLink></li>
        <li className='opacity-95 '><NavLink to="/inventoryTracking">Inventory Tracking</NavLink></li>
        <li className='opacity-95 '><NavLink to="/pricingManagement">Pricing Management</NavLink></li>
        <li className='opacity-95 '><NavLink to="/reportAnalysis">Report Analysis</NavLink></li>
        <li className='opacity-95 '><NavLink to="/orderManage">Order Management</NavLink></li>
        <li className='opacity-95 '><NavLink to="/supplierManage">Supplier Management</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-lg dropdown-content bg-base-200 rounded-box z-[1] mt-3 w-64 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">
                    {/* <img className='w-12' src={logo} alt="" /> */}
                    <h3 className="text-2xl">The 67 Pallete</h3>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                    <h1 className='px-4'>{user?.displayName}</h1>

                        <button onClick={handleSignOut} className="btn">Sign out</button>
                    </> : <>
                        <Link to="/register">
                            <button className="btn">Sign Up</button>
                        </Link>
                        <Link to="/login">
                            <button className="btn">Sign In</button>
                        </Link>
                    </>
                }

            </div>
        </div>
    );
};

export default Navbar;
