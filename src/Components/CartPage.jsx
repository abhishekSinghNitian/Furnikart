import React, { useState, useEffect } from 'react'
import axios from 'axios'

function CartPage() {
  const [cartItems, setCartItems] = useState([])

  const fetchCartItems = async () => {
    try {
      // 'http://localhost:8000/api/carts/'
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URI}/api/carts`,
      )
      setCartItems(response.data)
    } catch (error) {
      console.error('Error fetching cart items:', error)
      alert('Failed to fetch cart items.')
    }
  }

  useEffect(() => {
    fetchCartItems() // Fetch items when the component loads
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      <button
        onClick={fetchCartItems}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mb-6"
      >
        Show All Products
      </button>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cartItems.map((item) => (
          <div key={item._id} className="p-6 border rounded shadow-md bg-white">
            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-32 h-32 object-cover mx-auto mb-4"
            />
            <h3 className="font-medium text-center">{item.name}</h3>
            <p className="text-center">{item.description}</p>
            <p className="text-center">Price: ${item.price}</p>
            <p className="text-center">Stock: {item.stock}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CartPage
