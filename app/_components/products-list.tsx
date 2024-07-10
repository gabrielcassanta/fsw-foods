import React from "react";
import { db } from "../_lib/prisma";
import ProductItem from "./product-item";

const ProductsList = async () => {
  const products = await db.product.findMany({
    where: {
      discountPercent: {
        gt: 0,
      },
    },
  });
  return (
    <h1>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </h1>
  );
};

export default ProductsList;
