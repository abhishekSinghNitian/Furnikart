import React from 'react'
import ProductCard from './ProductCard'
import image1 from '../assets/Images/image1.png'
import image2 from '../assets/Images/image2.png'
import image3 from '../assets/Images/image3.png'
import image4 from '../assets/Images/image4.png'
import image5 from '../assets/Images/image5.png'
import image6 from '../assets/Images/image6.png'
import image7 from '../assets/Images/image7.png'
import image8 from '../assets/Images/image8.png'
import image9 from '../assets/Images/image9.png'
import image10 from '../assets/Images/image10.png'

const products = [
  { id: 1, name: 'Beds', img: image1 },
  { id: 2, name: 'Sofas', img: image2 },
  { id: 3, name: 'Chairs', img: image3 },
  { id: 4, name: 'Tables', img: image4 },
  { id: 5, name: 'Wardrobes', img: image5 },
  { id: 6, name: 'Lamps', img: image6 },
  { id: 7, name: 'Bookshelves', img: image7 },
  { id: 8, name: 'Couches', img: image8 },
  { id: 8, name: 'Exercise Mats', img: image9 },
  { id: 8, name: 'Matress', img: image10 },
]

const Products = () => {
  return (
    <div className="text-center py-8">
      <h1 className="text-2xl font-bold italic mt-8 mb-6">Harison's Store</h1>
      <div className="search-bar bg-gray-100 px-4 py-3 shadow-md mt-12 w-full z-40">
        <div className="flex items-center justify-center">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full max-w-lg border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <button className="ml-4 bg-orange-400 text-white py-2 px-4 rounded-lg hover:bg-orange-500 transition-colors">
            Search
          </button>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} name={product.name} img={product.img} />
        ))}
      </div>
    </div>
  )
}

export default Products
