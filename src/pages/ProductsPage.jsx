import React from "react";
import { Link } from "react-router";

const Products = () => {
  return (
    <div>
      Products page
      <Link to="/products/1">Product 1</Link>
    </div>
  );
};

export default Products;
