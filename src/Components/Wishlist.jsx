import React from 'react'

function Wishlist({ wishlistProducts }) {
  return (
    <div className="mt-20">
      <h2>Your Wishlist</h2>
      <div className="mt-8">
        {wishlistProducts.length === 0 ? (
          <p className="text-center text-xl font-semibold text-gray-500">
            Your wishlist is empty
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {wishlistProducts.map((product) => (
              <div
                key={product._id}
                className="p-4 border rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src={product.imageUrl || '/placeholder.png'}
                  alt={product.productname}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {product.productname}
                </h3>
                <p className="text-lg text-green-500 font-bold">
                  ${product.price}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Wishlist
