import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../utils/Config'

const Profile = () => {
  const [userData, setUserData] = useState(null)
  const [cart, setCart] = useState([]) // State for cart items
  const [wishlist, setWishlist] = useState([]) // State for wishlist items
  const navigate = useNavigate()

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Fetch user profile
        // 'http://localhost:8000/api/auth/profile'
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URI}/api/auth/profile`
          ,
        )
        const { username, email, isAdmin, cart, wishlist } = response.data // Destructure cart and wishlist
        setUserData({ username, email, isAdmin })
        setCart(cart || []) // Set cart data
        setWishlist(wishlist || []) // Set wishlist data
      } catch (error) {
        console.error('Error fetching user data:', error)
      }
    }
    fetchUserData()
  }, [])

  if (!userData) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-gray-500">Loading...</div>
      </div>
    )
  }

  const handleAdminClick = () => {
    navigate('/admin/dashboard') // Navigate to the Admin route
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Profile</h2>

        {/* User Details */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Username
          </label>
          <p className="px-4 py-2 border rounded-lg bg-gray-100 text-gray-700">
            {userData.username}
          </p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <p className="px-4 py-2 border rounded-lg bg-gray-100 text-gray-700">
            {userData.email}
          </p>
        </div>

        {/* Cart Section */}
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-4">Cart Items</h3>
          {cart.length > 0 ? (
            <ul className="list-disc list-inside">
              {cart.map((item, index) => (
                <li key={index} className="text-gray-700">
                  {item.name} - Quantity: {item.quantity}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">Your cart is empty.</p>
          )}
        </div>

        {/* Wishlist Section */}
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-4">Wishlist</h3>
          {wishlist.length > 0 ? (
            <ul className="list-disc list-inside">
              {wishlist.map((item, index) => (
                <li key={index} className="text-gray-700">
                  {item.name}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">Your wishlist is empty.</p>
          )}
        </div>

        {/* Admin Button */}
        {userData.isAdmin && (
          <div className="mt-6 text-center">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
              onClick={handleAdminClick}
            >
              Admin
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Profile
