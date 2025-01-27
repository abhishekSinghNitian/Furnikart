import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Products extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [], // State to store products
      isLoading: true, // To handle loading state
      error: null, // To handle errors
    }
  }

  componentDidMount() {
    this.fetchProducts()
  }

  fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/admin/products/')
      this.setState({ products: response.data, isLoading: false })
    } catch (error) {
      console.error('Error fetching products:', error)
      this.setState({ error: 'Failed to fetch products', isLoading: false })
    }
  }

  render() {
    const { products, isLoading, error } = this.state

    return (
      <div style={{ height: '100vh', margin: 0 }}>
        <div className="main-content">
          <div className="content-header">
            <h1>Manage Products</h1>
          </div>
          <div className="search-add-container">
            <div className="search-container">
              <input type="text" placeholder="Search Products..." />
            </div>
            <Link to="/AddProduct">
              <button className="add-product-btn">Add Product</button>
            </Link>
          </div>

          {/* Product Table */}
          {isLoading ? (
            <p>Loading products...</p>
          ) : error ? (
            <p style={{ color: 'red' }}>{error}</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Product Name</th>
                  <th>Category</th>
                  <th>Price (₹)</th>
                  <th>Stock</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product._id}>
                    <td>
                      <img
                        src={
                          product.imageUrl || 'https://via.placeholder.com/50'
                        }
                        alt={product.name}
                        style={{ width: '50px', height: '50px' }}
                      />
                    </td>
                    <td>{product.name}</td>
                    <td>{product.category}</td>
                    <td>{product.price}</td>
                    <td>{product.stock}</td>
                    <td>{product.description}</td>
                    <td className="action-buttons">
                      <button>Edit</button>
                      <button>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {/* Pagination */}
          <div
            className="pagination"
            style={{ textAlign: 'center', marginTop: '20px' }}
          >
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Products
