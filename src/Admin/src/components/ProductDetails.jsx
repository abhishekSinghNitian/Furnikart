// ProductDetails.jsx
import React from "react";

const ProductDetails = () => {
  return (
    <div className="product-details card">
      <h2>Product Details</h2>
      <div>
        <label>Categories</label>
        <select multiple>
          <option>Sofas</option>
          <option>Chairs</option>
          <option>Tables</option>
          <option>Beds</option>
          <option>Storage</option>
        </select>
      </div>
      <div>
        <label>Tags</label>
        <input type="text" placeholder="Enter product tags" />
      </div>
    </div>
  );
};

export default ProductDetails;
