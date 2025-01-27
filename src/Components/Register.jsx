import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate()

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { username, email, password, confirmPassword } = formData

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match')
      return
    }

    try {
      // 'http://localhost:8000/api/api/auth/signup'
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URI}/api/auth/signup`,
        {
          username,
          email,
          password,
        },
      )
      console.log('User registered successfully:', response.data)
      navigate('/') // Redirect to login after successful registration
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message)
      } else {
        setErrorMessage('Server error')
      }
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
      <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
      {errorMessage && (
        <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Name</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Enter your password"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Confirm your password"
          />
        </div>
        <button className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition">
          Register
        </button>
      </form>
      <p className="mt-4 text-sm text-center">
        Already have an account?{' '}
        <Link to="/" className="text-orange-500 font-medium hover:underline">
          Sign In here
        </Link>
      </p>
    </div>
  )
}

export default Register
