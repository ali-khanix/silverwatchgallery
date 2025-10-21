"use client";

import useCartStore from "@/stores/cartStore";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

const ShoppingCartIcon = () => {
  const { cart } = useCartStore();
  return (
    <Link href={"/cart"} className="hover:text-zinc-400 relative">
      <ShoppingCart size={24} />
      <span className="absolute -top-3 -right-3 bg-zinc-100 text-zinc-900 rounded-full w-4 h-4 flex items-center justify-center text-xs font-medium">
        {cart.length}
      </span>
    </Link>
  );
};

export default ShoppingCartIcon;
