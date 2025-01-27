import React from 'react'

const ProductCard = ({ name, img }) => {
  return (
    <div className="flex flex-col items-center ">
      <div className="w-28 h-28 hover:shadow-lg hover:translate-y-2 rounded-full bg-gray-100 flex items-center justify-center shadow-md overflow-hidden">
        <img src={img} alt={name} className="w-20 h-20 object-cover" />
      </div>
      <p className="mt-2 font-bold">{name}</p>
    </div>
  )
}

export default ProductCard
