import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import AuthContext from '../Providers/AuthContext';


const axiosInstance = axios.create(
    {
        baseURL: `http://localhost:5000`,
    // baseURL: import.meta.env.VITE_URL,
    withCredentials: true,
    }
)

const useAxiosSecure = () => {
    const { signOutUser } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(()=>{
        axiosInstance.interceptors.response.use(
            response=>{
                console.log(response)
                return response;
            }, error=>{
                console.log('erro caught in interceptor',error)
                if (error.status === 401 || error.status === 403) {
                    signOutUser()
                        .then(() => {
                            // redirect to the login page
                            navigate('/signIn')
                        })
                        .catch(err => console.log(err))
                }
                return Promise.reject(error)
            })
    },[])
    return axiosInstance;
};

export default useAxiosSecure;
