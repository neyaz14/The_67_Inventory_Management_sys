import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoutes from './Router/AppRoutes.jsx'
import AuthProvider from './Providers/AuthProviders.jsx'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";



const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(


    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <AppRoutes></AppRoutes>
            </AuthProvider>
        </QueryClientProvider>
    </StrictMode>
    ,
)
