import React from 'react'

const Footer = () => {
  return (
    <footer className=" py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center bg-gray-100 mb-8 flex justify-between p-5">
          <div>
            <h2 className="text-xl font-bold mb-2">Our Newsletter</h2>
            <p className="text-gray-600 mb-4">
              Subscribe our newsletter and get discount 50% off
            </p>
          </div>
          <div className="flex justify-center items-center">
            <input
              type="email"
              placeholder="Your email address "
              className="p-2 rounded-md border border-gray-300 w-[400px]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 text-sm text-gray-600">
          {/* Left Section */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Harisons</h3>
            <p>Harisons, Chennai, Tamil Nadu</p>
            <p className="mt-2">+91 9756609825</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-600 hover:text-red-900">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-red-900">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-red-900">
                <i className="fab fa-tumblr"></i>
              </a>
            </div>
          </div>

          {/* Center Section */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">
              Help & Information
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-red-900">
                  Help & Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-900">
                  Returns & Refunds
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-900">
                  Online Stores
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-900">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">About Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-red-900">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-900">
                  What We Do
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-900">
                  FAQ Page
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-900">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-4 text-center">
            <div className="flex justify-center items-center space-x-4">
              <input
                type="email"
                placeholder="Your email address"
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
              <button className="p-2 bg-gray-900 text-white rounded-md hover:bg-gray-700">
                →
              </button>
            </div>
            <div className="mt-4 text-sm text-gray-600 space-x-4">
              <a href="#" className="hover:text-red-900">
                Term & Condition
              </a>
              <a href="#" className="hover:text-red-900">
                Policy
              </a>
              <a href="#" className="hover:text-red-900">
                Map
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
