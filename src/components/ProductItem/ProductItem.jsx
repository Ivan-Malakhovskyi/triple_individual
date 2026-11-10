import React from "react";
import { useParams } from "react-router";

const ProductItem = () => {
  const { productId, item } = useParams();
  console.log(productId);
  console.log(item);
  return <h1>Current id {productId}</h1>;
};

export default ProductItem;
