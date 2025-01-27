import React, { lazy, Suspense, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Blogs from './Components/Blogs'
import Footer from './Components/Footer'
import Hero_video from './Components/Hero_video'
import Popular_products from './Components/Popular_products'
import Products from './Components/Products'
import CartPage from './Components/CartPage'
import Secondary_products from './Components/Secondary_products'
import Register from './Components/Register'
import SignIn from './Components/SignIn'
import Profile from './Components/Profile'
import Wishlist from './Components/Wishlist.jsx'

const AdminApp = lazy(() => import('./Admin/src/App.jsx'))

function App() {
  const [cartCount, setCartCount] = useState(0)
  const [wishlistCount, setWishlistCount] = useState(0)
  const [wishlistProducts, setWishlistProducts] = useState([])

  // Function to update cart count
  const updateCartCount = () => {
    setCartCount((prevCount) => prevCount + 1)
  }

  // Function to update wishlist count and wishlist products
  const updateWishlistCount = () => {
    setWishlistCount((prevCount) => prevCount + 1)
  }

  const updateWishlistProducts = (product) => {
    setWishlistProducts((prevProducts) => [...prevProducts, product])
  }

  return (
    <>
      <Navbar cartCount={cartCount} wishlistCount={wishlistCount} />
      <div>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/admin/*"
            element={
              <Suspense fallback={<div>Loading Admin Panel...</div>}>
                <AdminApp />
              </Suspense>
            }
          />
          <Route
            path="/home"
            element={
              <>
                <Products updateCartCount={updateCartCount} />
                <Hero_video />
                <Popular_products
                  updateCartCount={updateCartCount}
                  updateWishlistCount={updateWishlistCount}
                  updateWishlistProducts={updateWishlistProducts}
                />
                <Blogs />
                <Footer />
              </>
            }
          />
          <Route
            path="/products"
            element={<Products updateCartCount={updateCartCount} />}
          />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/cart" element={<CartPage />} />
          <Route
            path="/wishlist"
            element={<Wishlist wishlistProducts={wishlistProducts} />}
          />
        </Routes>
      </div>
    </>
  )
}

export default App
