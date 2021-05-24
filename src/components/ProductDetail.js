import React from "react";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import ProductRating from "./ProductRating";
const ProductDetail = ({ product }) => {
  let images = [];
  if (product.id) {
    images = product.image.map((img) => ({
      src: `${img}`,
    }));
  } else {
    window.history.back();
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-sm mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:max-w-3xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
        <div className="flex w-full">
          <div className="flex-wrap">
            <Carousel
              images={images}
              style={{ height: 600, width: 500 }}
              hasMediaButton={false}
              hasThumbnails={true}
            />
          </div>
          <div className="flex-1 m-4">
            <div className="pb-2 border-b-2">
              <h1 className="text-center text-lg font-bold tracking-wide text-gray-700">
                {product.name}
              </h1>
            </div>
            <div className="flex">
              <div className="flex-1">
                <div className="grid grid-cols-2 gap-2 border-r-2 border-b-2 pb-4">
                  <div className="text-right space-y-2">
                    <p className="">Product rating out of:</p>
                    <p>Condition:</p>

                    <p>Price:</p>
                  </div>
                  <div className="text-left space-y-2">
                    <ProductRating />
                    <p>Brand new</p>

                    <p className="font-bold">${product.price}.00</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 border-r-2 border-b-2 pb-4">
                  <div className="text-right space-y-2">
                    <p className="">Shipping:</p>
                    <p>Item Location:</p>

                    <p>Ships to:</p>
                    <p>Delivery:</p>
                  </div>
                  <div className="text-left space-y-2">
                    <p>FREE shipping</p>
                    <p>Ulaanbaatar, Mongolia</p>
                    <p className="">Worldwide</p>
                    <p className="">Estimated between Wed. May,26</p>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
