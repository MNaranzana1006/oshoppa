import React from "react";
import { StarIcon } from "@heroicons/react/outline";
import Button from "./Button";
const Product = ({ product }) => {
  return (
    <div className="flex flex-col group rounded-md shadow-2xl overflow-hidden">
      <img
        className="w-full h-64 object-cover"
        src={product.image}
        alt="Product"
      />
      <div className="p-4 h-44 flex flex-col">
        <a
          className="text-center group-hover:underline focus:outline-none focus:underline"
          href={`/products/${product.id}`}
        >
          <h1 className="text-lg font-semibold leading-5">{product.name}</h1>
        </a>
        <p className="flex-1 text-center text-sm">{product.info}</p>
        <div className="flex items-center justify-between mt-2">
          <p className="text-center text-xl font-bold">${product.price}.00</p>
          <div className="text-right">
            <p>Seller: {product.offer}</p>
            <ul className="flex justify-end mt-1 items-center">
              <li>
                <StarIcon className="w-5 h-5 text-yellow-500" />
              </li>
              <li>
                <StarIcon className="w-5 h-5 text-yellow-500" />
              </li>
              <li>
                <StarIcon className="w-5 h-5 text-yellow-500" />
              </li>
              <li>
                <StarIcon className="w-5 h-5 text-yellow-500" />
              </li>
              <li>
                <StarIcon className="w-5 h-5 text-yellow-500" />
              </li>
              <p className="text-xs">(243)</p>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex p-4 items-center justify-end">
        <Button>Add to Cart</Button>
      </div>
    </div>
  );
};

export default Product;
