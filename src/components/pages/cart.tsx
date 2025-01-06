import { CartContext } from "../../context/cart";
import { useContext } from "react";
import { IContextData } from "../../context/cart";
const Cart = () => {
  const { cartItems }: IContextData[] = useContext(CartContext);
  return <>{cartItems.join(",")}</>;
};
export default Cart;
