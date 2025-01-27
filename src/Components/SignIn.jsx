import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const SignIn = () => {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate()

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { email, password } = formData
    //
    // 'http://localost:8000/api/auth/login'
    try {
      console.log(import.meta.env.VITE_BASE_URI)
      //  'http://localhost:8000/api/auth/login'
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URI}/api/auth/login`,
        {
          email,
          password,
        },
      )
      // console.log(response)
      const token = response.data.token
      const userId = response.data.user._id
      // console.log(userId)
      localStorage.setItem('userId', userId)
      console.log(localStorage.getItem('userId'))
      // console.log('Login successful:', response.data.token)
      localStorage.setItem('token', token) // Store JWT in localStorage
      navigate('/home') // Redirect to main page pr
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
      <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
      {errorMessage && (
        <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
      )}
      <form onSubmit={handleSubmit}>
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
        <button className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition">
          Sign In
        </button>
      </form>
      <p className="mt-4 text-sm text-center">
        Don't have an account?{' '}
        <Link
          to="/register"
          className="text-orange-500 font-medium hover:underline"
        >
          Register here
        </Link>
      </p>
    </div>
  )
}

export default SignIn
