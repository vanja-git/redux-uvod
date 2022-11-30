import { useSelector } from "react-redux";
import { prebrojCart } from "../utils/cart-utils";
import CartItem from "./CartItem";


const CartLista = () => {
  const cart = useSelector(state => state.cart); // iz redux stae uzimamo state.cart i stavljamo u nasu pormenjivu cart

  const brojac = prebrojCart(cart);

  // obracun cena
  let ukupno = 0;
  cart.forEach(item => {
    const itemUkupno = item.kolicina * item.cena;
    ukupno += itemUkupno;
  });

  return (
    <div>
      <h2>Sadrzaj vase korpe ({brojac})</h2>
      <div className="artikli-lista">
        {
          cart.map((item)=>{
            return (
              <CartItem key={item.id} item={item}/>
            )
          })
        }
      </div>
      <p>Ukupno: {ukupno} RSD</p>
    </div>
  )
}

export default CartLista;