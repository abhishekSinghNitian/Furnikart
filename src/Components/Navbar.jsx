import React, { useEffect, useState } from 'react'
import { RiContactsLine } from 'react-icons/ri'
import { IoBagHandleOutline } from 'react-icons/io5'
import { FaRegHeart } from 'react-icons/fa'
import HARISONS from '../assets/Images/HARISONS.png'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Navbar({ cartCount, wishlistCount }) {
  const navigate = useNavigate()

  const handleCartClick = () => {
    navigate('/cart')
  }

  const handleWishlistClick = async () => {
    const userId = localStorage.getItem('userId')
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URI}/api/users/wishlists/${userId}`,
      )
      console.log('Navigating to /wishlist with products:', response.data)
      navigate('/wishlist', { state: { products: response.data } })
    } catch (error) {
      console.error('Error fetching wishlist:', error.message || error)
    }
  }

  return (
    <div>
      <div className="maintitle bg-gradient-to-r from-yellow-500 to-orange-500 w-full h-14 font-bold text-center">
        <span>&#10024;</span> Exciting new Design & Sales{' '}
        <span className="block">
          <a href="#">Shop now</a>
        </span>
      </div>
      <div className="bg-white px-12 z-50 flex justify-between items-center iconbar w-full h-16 border-y-[1.5px] border-slate-300 fixed top-14">
        <div className="mainicon h-12 w-16">
          <img src={HARISONS} alt="Logo" />
        </div>
        <div className="subicon flex justify-center items-center gap-12">
          <RiContactsLine
            className="text-gray-600 text-2xl cursor-pointer"
            onClick={() => navigate('/profile')}
          />
          <div
            className="relative inline-block cursor-pointer"
            onClick={handleCartClick}
          >
            <IoBagHandleOutline className="text-gray-600 text-2xl" />
            <span className="absolute -top-1 -right-1 bg-orange-400 h-4 w-4 rounded-full text-xs flex items-center justify-center text-white">
              {cartCount}
            </span>
          </div>
          <div
            className="relative inline-block cursor-pointer"
            onClick={handleWishlistClick}
          >
            <FaRegHeart className="text-gray-600 text-2xl" />
            <span className="absolute -top-1 -right-1 bg-orange-400 h-4 w-4 rounded-full text-xs flex items-center justify-center text-white">
              {wishlistCount}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
