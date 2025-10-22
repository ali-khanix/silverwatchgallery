"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const ProductInteraction = ({ product, selectedColor }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleTypeChange = (type, value) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(type, value);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex flex-col gap-4 mt-4">
      {/* COLOR */}
      <div className="flex flex-col gap-2 text-xs">
        <span className="text-gray-500">رنگ</span>
        <div className="flex items-center gap-2">
          {product.colors.map((color) => (
            <div
              className={`cursor-pointer border-1 p-[2px] ${
                selectedColor === color ? "border-gray-300" : "border-white"
              }`}
              key={color}
              onClick={() => handleTypeChange("color", color)}
            >
              <div className={`w-6 h-6`} style={{ backgroundColor: color }} />
            </div>
          ))}
        </div>
      </div>

      {/* QUANTITY */}
      <div className=""></div>
    </div>
  );
};

export default ProductInteraction;
