import React from 'react'

function Blog({ data }) {
  const { date, place, country, imgpath, blogname } = data
  return (
    <div className="p-2 relative group inline-block h-auto w-auto ">
      <div className="productimg  h-auto w-[400px]">
        <img src={imgpath} alt={place} />
      </div>
      <div className="product_name mt-2">
        <span className="block text-1xl font-bold">{blogname}</span>
        <span className="block hover:text-red-700">
          {date} / {place} / {country}
        </span>
      </div>
      <div className="absolute bottom-24 right-8 bg-gray-600 text-white px-4 py-1 text-sm font-medium  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Read More+
      </div>
    </div>
  )
}

export default Blog
