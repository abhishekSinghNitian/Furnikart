import React, { useState, useEffect } from 'react'
import Secondary_products from './Secondary_products'
import axios from 'axios'

function Popular_products({ updateCartCount, updateWishlistCount, updateWishlistProducts }) {
  const [products, setProducts] = useState([]) // State to store fetched products

  // Fetch products from the database
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const token = localStorage.getItem('token')

        if (!token) {
          console.error('No token found!')
          return
        }

        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URI}/api/admin/products/`,
          {
            headers: {
              Authorization: `Bearer ${token}`, // Pass the token
            },
          },
        )
        if (response.status === 200) {
          setProducts(response.data) // Assuming response.data contains an array of products
        } else {
          console.error('Failed to fetch products.')
        }
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }

    fetchProducts()
  }, [])

  return (
    <div className="relative h-auto mx-auto container mt-12">
      <div className="flex justify-between">
        <span className="text-4xl font-medium">Popular Products</span>
      </div>
      <div className="allproducts mt-12 flex flex-wrap gap-12 justify-center">
        {products.map((product, index) => (
          <Secondary_products
            key={index}
            data={product}
            updateCartCount={updateCartCount}
            updateWishlistCount={updateWishlistCount}
            updateWishlistProducts={updateWishlistProducts} // Pass the update function to Secondary_products
          />
        ))}
      </div>
    </div>
  )
}

export default Popular_products
