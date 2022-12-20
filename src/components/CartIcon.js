import { useSelector } from "react-redux";
import { prebrojCart } from "../utils/cart-utils";
import { BsCart3 } from 'react-icons/bs';


/*
Koristimo gotove komponete sa ikonicama:
https://react-icons.github.io/react-icons

*/

/*
SKRACENA IF ELSE PETLJA
uslov ? ako je uslov true : ako je else

*/

const CartIcon = () => {
  const cart = useSelector(state => state.cart)
  
  const brojac = prebrojCart(cart)

  return (
    <div className="cart-icon-widget">
      <BsCart3/>
      {
        /* badge prikazjemo samo ukoliko ima bar 1 item u korpi */
        brojac > 0 ? (<span className="badge">{brojac}</span>) : null
      }
       </div>
  )
}

export default CartIcon;