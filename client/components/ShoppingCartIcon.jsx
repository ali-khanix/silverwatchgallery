"use client";

import useCartStore from "@/stores/cartStore";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

const ShoppingCartIcon = () => {
  const { cart } = useCartStore();

  return (
    <Link href={"/cart"} className="hover:text-zinc-400 relative">
      <ShoppingCart size={28} />
      <span className="absolute -top-3 -right-3 bg-zinc-100 text-zinc-900 rounded-full w-6 h-6 translate-y-1 flex items-center justify-center text-xs font-semibold">
        {cart.reduce((acc, cur) => acc + cur.quantity, 0)}
      </span>
    </Link>
  );
};

export default ShoppingCartIcon;
