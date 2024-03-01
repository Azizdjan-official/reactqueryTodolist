import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { QueryClientProvider } from '@tanstack/react-query'
import { client } from './config/queryclient.js'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';



ReactDOM.createRoot(document.getElementById('root')).render(
   <BrowserRouter>
    <QueryClientProvider client={client}>
        <App />
    </QueryClientProvider>
   </BrowserRouter>
)
