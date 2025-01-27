import React from 'react'
import { FaShoppingBag, FaHeart } from 'react-icons/fa'
import axios from 'axios'

function Secondary_products({
  data,
  updateCartCount,
  updateWishlistCount,
  updateWishlistProducts,
}) {
  const {
    imageUrl = '/placeholder.png',
    productname = 'Unnamed Product',
    price = 0,
    stock = 0,
    description = 'No description available',
  } = data || {}

  const handleAddToCart = async () => {
    try {
      const productDetails = {
        productId: data.id || 'default-id',
        name: productname,
        description,
        price,
        stock,
        imageUrl,
        quantity: 1,
      }
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URI}/api/carts/add`,
        productDetails,
      )
      if (response.status === 201 || response.data.success) {
        updateCartCount()
        alert(`${productname} has been added to the cart!`)
      } else {
        alert('Failed to add product to cart.')
      }
    } catch (error) {
      console.error('Error adding product to cart:', error)
      alert('Failed to add product to cart.')
    }
  }

  const handleAddToWishlist = async () => {
    const token = localStorage.getItem('token')
    if (!token) {
      alert('Please log in to add to the wishlist.')
      return
    }

    const userId = localStorage.getItem('userId')

    try {
      const productDetails = {
        userId,
        productId: data._id,
      }
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URI}/api/users/wishlists`,
        productDetails,
      )

      if (response.status === 201 || response.data.success) {
        updateWishlistCount()
        updateWishlistProducts(data) // Add the product to wishlist
        alert(`${productname} has been added to your wishlist!`)
      } else {
        alert('Failed to add product to wishlist.')
      }
    } catch (error) {
      console.error('Error adding product to wishlist:', error)
      alert('Failed to add product to wishlist.')
    }
  }

  return (
    <div className="p-2 relative inline-block h-auto w-auto group">
      <div className="productimg h-auto w-64">
        <img src={imageUrl} alt={productname} />
      </div>
      <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-opacity duration-300">
        <button
          className="p-2 bg-white rounded-full text-2xl shadow-md text-gray-800 hover:text-black hover:scale-110 transition-transform duration-200"
          onClick={handleAddToCart}
          aria-label="Add to Cart"
        >
          <FaShoppingBag />
        </button>
        <button
          className="p-2 bg-white rounded-full text-2xl shadow-md text-gray-800 hover:text-black hover:scale-110 transition-transform duration-200"
          onClick={handleAddToWishlist}
          aria-label="Add to Wishlist"
        >
          <FaHeart />
        </button>
      </div>
      <div className="product_name mt-2">
        <span className="block text-center font-medium">{productname}</span>
      </div>
    </div>
  )
}

export default Secondary_products
