import { createContext, useState } from "react";
import RestaurantMenu from "../components/pages/restaurant-menu";
import Cart from "../components/pages/cart";

export const CartContext = createContext<IContextData[] | null>(null);
export interface IContextData {
  name: string;
  pricePerItem: number;
  quantity: number;
  totalPrice: number;
}

const CartProvider = () => {
  const [cartItems] = useState<IContextData[]>([]);
  return (
    <>
      <CartContext.Provider value={cartItems}>
        <RestaurantMenu />
        <Cart />
      </CartContext.Provider>
    </>
  );
};
export default CartProvider;
