import React, { useState } from 'react'
import axios from 'axios' // Use axios for HTTP requests
import './CustomerDetails.css'

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    description: '',
    imageUrl: '', // Matches the backend model's `imageUrl` field
  })

  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post(
        'http://localhost:8000/api/admin/products/create', // Update with your backend endpoint
        formData, // Pass formData directly as JSON
        {
          headers: {
            'Content-Type': 'application/json', // Set correct content type
          },
        },
      )

      setSuccessMessage('Product added successfully!')
      setErrorMessage('')
      setFormData({
        name: '',
        category: '',
        price: '',
        description: '',
        imageUrl: '',
      }) // Clear the form after success
    } catch (error) {
      console.error('Error adding product:', error)
      setErrorMessage('Failed to add product. Please try again.')
      setSuccessMessage('')
    }
  }

  return (
    <div>
      <div className="main-content">
        <div className="content-header">
          <h1>Add Product</h1>
          <p>Fill in the details to add a new product to your store.</p>
        </div>
        <div className="content-body">
          <form id="add-product-form" onSubmit={handleSubmit}>
            {/* Product Details Section */}
            <div className="form-section">
              <h3>Product Details</h3>
              <div className="form-group">
                <label htmlFor="category">Category</label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Category</option>
                  <option value="sofas">Sofas</option>
                  <option value="chairs">Chairs</option>
                  <option value="tables">Tables</option>
                  <option value="beds">Beds</option>
                  <option value="storage">Storage</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="name">Product Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter product name"
                  value={formData.productname}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  name="description"
                  placeholder="Enter product description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Pricing Section */}
            <div className="form-section">
              <h3>Pricing</h3>
              <div className="form-group">
                <label htmlFor="price">Price</label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  placeholder="Enter product price"
                  value={formData.price}
                  onChange={handleChange}
                  min="0"
                  required
                />
              </div>
            </div>

            {/* Media Section */}
            <div className="form-section">
              <h3>Media</h3>
              <div className="form-group">
                <label htmlFor="imageUrl">Image URL</label>
                <input
                  type="text"
                  id="imageUrl"
                  name="imageUrl"
                  placeholder="Enter image URL"
                  value={formData.imageUrl}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="form-section">
              <button type="submit" className="btn">
                Add Product
              </button>
            </div>
          </form>
          {successMessage && <p className="success">{successMessage}</p>}
          {errorMessage && <p className="error">{errorMessage}</p>}
        </div>
      </div>
    </div>
  )
}

export default AddProduct
