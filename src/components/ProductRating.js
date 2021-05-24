import React from "react";
import { StarIcon } from "@heroicons/react/outline";
const ProductRating = () => {
  return (
    <ul className="flex justify-start mt-1 items-center">
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
  );
};

export default ProductRating;
