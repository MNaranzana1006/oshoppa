import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import ProductRating from "./ProductRating";
const Product = ({ product, showProductDetail }) => {
  return (
    <div className="flex flex-col group rounded-md shadow-2xl overflow-hidden">
      <img
        className="w-full h-64 object-cover"
        src={product.image}
        alt="Product"
      />
      <div className="p-4 h-44 flex flex-col">
        <Link
          className="text-center group-hover:underline focus:outline-none focus:underline"
          to={`/products/${product.id}`}
          onClick={() => showProductDetail(product)}
        >
          <h1 className="text-lg font-semibold leading-5">{product.name}</h1>
        </Link>
        <p className="flex-1 text-center text-sm">{product.info}</p>
        <div className="flex items-center justify-between mt-2">
          <p className="text-center text-xl font-bold">${product.price}.00</p>
          <div className="text-right">
            <p>Seller: {product.offer}</p>
            <ProductRating />
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
