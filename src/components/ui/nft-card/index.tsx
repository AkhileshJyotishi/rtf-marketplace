import Image, { StaticImageData } from "next/image";
import React from "react";

interface ProductCardProps {
  imageUrl: StaticImageData;
  title: string;
  rating: number;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  title,
  rating,
  price,
}) => {
  return (
    <div className="bg-gradient-to-br from-red-600 to-black  w-full max-w-sm border border-gray-200 rounded-lg shadow ">
      <Image
        width={400}
        height={400}
        className="p-1 rounded-t-lg"
        src={imageUrl}
        alt="product image"
      />

      <div className="px-5 pb-3 flex flex-col gap-3">
        <h5 className="text-lg font-semibold tracking-tight text-white">
          {title}
        </h5>
        <div className="flex justify-between">
          <div className="flex gap-2 p-1 items-center text-white text-sm">
            <Image
              src={imageUrl}
              height={400}
              width={400}
              className="h-6 w-6 rounded-full "
              alt="User"
            />
            <p className="font-semibold">{title}</p>
          </div>
          <div>
            <span className="  bg-black text-white text-xs  font-extralight me-2 px-2.5 py-0.5 rounded-xl  border border-gray-500">
                <span className="font-bold mr-1 text-xl">#</span>1234
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1 ">
            <div className="text-gray-500 font-semibold text-xs">Price</div>
            <div className="text-sm text-white">{price}</div>
          </div>
          <div className="flex flex-col gap-1 ">
            <div className="text-gray-500 font-semibold text-xs">
              Highest Bid
            </div>
            <div className="text-sm text-white"> {price}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

