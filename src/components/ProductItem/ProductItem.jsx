import React from "react";
import { useParams } from "react-router";

const ProductItem = () => {
  const { productId } = useParams();
  return <h1>Current id {productId}</h1>;
};

export default ProductItem;
