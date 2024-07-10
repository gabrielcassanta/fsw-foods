import { Product } from "@prisma/client";
import Image from "next/image";
import React from "react";

type ProductItemProps = {
  product: Product;
};

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="h-[150px] w-[150px] space-y-2 ">
      <div className="relative h-[150px] w-full">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>
      <div></div>
    </div>
  );
};

export default ProductItem;
