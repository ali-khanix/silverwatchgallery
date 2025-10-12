import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <div className="rounded-3xl overflow-hidden bg-white flex sm:block p-2 gap-4 sm:px-4 sm:py-8">
      {/* IMAGE */}
      <Link href={"/products"} className="w-[35%]">
        <div className="relative aspect-[3/4]">
          <Image
            src={product.images.black}
            alt={product.name}
            fill
            className="object-cover hover:scale-105 transition-all duration-300"
          />
          <Image
            width={16}
            height={16}
            src={"/icons/watch-logo.svg"}
            alt={"برند عکس"}
            className="absolute left-1 top-1"
          />
        </div>
      </Link>

      {/* PRODUCT DETAILS */}
      <div className="flex flex-col gap-2 w-[65%] sm:w-full justify-center sm:block">
        {/* NAME */}
        <div className="flex flex-col items-center justify-start gap-1">
          <h1 className="font-medium text-zinc-700 line-clamp-1">
            {product.name}
          </h1>
          <p className=" font-medium text-zinc-700 line-clamp-1">
            {product.shortDescription}
          </p>
        </div>

        {/* PRICE AND ADD BUTTON*/}
        <div className="flex justify-between sm:mt-4 sm:flex-col items-center sm:gap-4">
          <div className="flex flex-col">
            <span className="font-bold">{product.price} تومان</span>
            <span className="line-through text-gray-500">
              {product.offer} تومان
            </span>
          </div>

          <button className="bg-zinc-950 rounded-full p-3 flex items-center justify-center mx-auto cursor-pointer w-14 h-14 sm:w-full sm:h-full">
            <ShoppingCart color="white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
