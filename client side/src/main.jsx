import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoutes from './Router/AppRoutes.jsx'
import AuthProvider from './Providers/AuthProviders.jsx'

createRoot(document.getElementById('root')).render(


    <StrictMode>
        <AuthProvider>
            <AppRoutes></AppRoutes>
        </AuthProvider>
    </StrictMode>
    ,
)
