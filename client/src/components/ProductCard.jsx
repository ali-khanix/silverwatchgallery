"use client";
import useCartStore from "@/stores/cartStore";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

const ProductCard = ({ product }) => {
  const [productTypes, setProductTypes] = useState({
    color: product.colors[0],
  });

  const { addToCart } = useCartStore();

  const handleAddToCart = () => {
    addToCart({
      ...product,
      selectedColor: productTypes.color,
    });

    toast.success("محصول به کارت اضافه شد");
  };

  function handleProductType(type, value) {
    setProductTypes((prev) => ({
      ...prev,
      [type]: value,
    }));
  }
  return (
    <div className="rounded-3xl overflow-hidden bg-white flex flex-col p-2 sm:mx-0 sm:px-4 sm:py-4 sm:my-4">
      {/* IMAGE */}
      <Link
        href={`/products/${encodeURIComponent(
          product.name.replace(/\s+/g, "-")
        )}`}
        className="w-full"
      >
        <div className="relative aspect-[3/4] sm:aspect-[3/4]">
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
      <div className="flex flex-col gap-2 sm:w-full justify-center sm:block">
        {/* NAME */}
        <div className="flex flex-col items-start justify-center gap-1">
          <h1 className="font-medium text-zinc-700 line-clamp-1">
            {product.name}
          </h1>
          <p className=" font-medium text-zinc-700 line-clamp-1">
            {product.shortDescription}
          </p>
        </div>

        {/* COLORS */}
        <div className="flex items-center justify-start gap-1 mt-1">
          {product.colors.map((color) => (
            <div key={color}>
              <div
                className="w-[14px] h-[14px] rounded-full"
                style={{ backgroundColor: color }}
              ></div>
            </div>
          ))}
        </div>

        {/* PRICE AND ADD BUTTON*/}
        <div className="flex justify-center items-start sm:mt-4 flex-col gap-4">
          <div className="flex flex-col w-full">
            <span className="font-bold">
              {product.price.toLocaleString()} تومان
            </span>
            <span className="line-through text-gray-500">
              {product.offer} تومان
            </span>
          </div>

          <button
            onClick={handleAddToCart}
            className="bg-zinc-950 rounded-full p-3 flex items-center justify-center  gap-1 mx-auto cursor-pointer w-full sm:h-full text-white hover:bg-zinc-800"
          >
            <span>افزودن</span>
            <ShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
