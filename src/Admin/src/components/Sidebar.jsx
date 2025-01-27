import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const dropdownRef = useRef(null)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleLinkClick = (event) => {
    event.preventDefault()
    const path = event.target.getAttribute('href')
    window.location.href = path
  }

  return (
    <div className="sidebar">
      <h2>Harison Furniture</h2>
      <style>
        {`
        .sidebar {
            width: 220px;
            height: 100vh;
            color: white;
            padding: 20px;
            box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1); /* Light shadow */
            position: fixed;
            top: 0;
            left: 0;
            z-index: 1000;
            transition: 0.3s ease-in-out;
          }
            .sidebar li a {
            text-decoration: none;
            color: white; /* Make the links white */
            font-size: 18px;
            display: block;
            padding: 10px;
            border-radius: 4px;
            transition: background-color 0.3s ease;
          }
            `}
      </style>
      <ul>
        {/* Dashboard Link */}
        <li>
          <Link to="/admin/dashboard" onClick={handleLinkClick}>
            Dashboard
          </Link>
        </li>

        {/* Catalog with sub-directory */}
        <li className="dropdown" ref={dropdownRef}>
          <a
            href="#"
            className="dropdown-toggle"
            onClick={toggleDropdown} // Handle click to toggle
          >
            Catalog <i className="fas fa-caret-down" />
          </a>
          {/* Only show dropdown menu if state is true */}
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/admin/addProduct" onClick={handleLinkClick}>
                  Add Product
                </Link>
              </li>
              <li>
                <Link to="/admin/products" onClick={handleLinkClick}>
                  View Products
                </Link>
              </li>
              <li>
                <Link to="/admin/categories" onClick={handleLinkClick}>
                  Categories
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Corrected Customers Link */}
        <li>
          <Link to="/admin/customers">Customers</Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
