import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useCartStore = create(
  persist((set) => ({
    cart: [],
    addToCart: (product) =>
      set((state) => {
        const existingIndex = state.cart.findIndex(
          (p) =>
            p.id === product.id && p.selectedColor === product.selectedColor
        );

        if (existingIndex !== -1) {
          const updatedCart = [...state.cart];
          updatedCart[existingIndex].quantity += product.quantity || 1;

          return { cart: updatedCart };
        }

        return {
          cart: [
            ...state.cart,
            {
              ...product,
              quantity: 1,
              selectedColor: product.selectedColor,
            },
          ],
        };
      }),
    removeFromCart: (product) =>
      set((state) => ({
        cart: state.cart.filter(
          (p) =>
            !(p.id === product.id && p.selectedColor === product.selectedColor)
        ),
      })),
    clearCart: () => set({ cart: [] }),
  })),
  {
    name: "cart",
    storage: createJSONStorage(() => localStorage),
  }
);

export default useCartStore;
