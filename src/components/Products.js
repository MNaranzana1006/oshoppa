import React from "react";
import Product from "./Product";

const Products = ({ productList, showProductDetail }) => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-sm mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:max-w-3xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {productList.map((product) => (
            <div key={product.id} className="grid-cols-1">
              <Product
                product={product}
                showProductDetail={showProductDetail}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
