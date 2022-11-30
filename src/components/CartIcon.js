import { useSelector } from "react-redux";
import { prebrojCart } from "../utils/cart-utils";

const CartIcon = () => {
  const cart = useSelector(state => state.cart)
  
  const brojac = prebrojCart(cart)

  return (
    <div>cart ikonica {brojac}</div>
  )
}

export default CartIcon;