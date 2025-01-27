import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import Categories from './components/Categories'
import CustomerDetails from './components/CustomerDetails'
import AddProduct from './components/AddProduct'
import Products from './components/Products'

import './assets/styles.css'

function AdminApp() {
  return (
    <div className="app">
      <div className="main-container">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/addproduct" element={<AddProduct />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/customers" element={<CustomerDetails />} />
            <Route path="/addproduct" element={<AddProduct />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default AdminApp
