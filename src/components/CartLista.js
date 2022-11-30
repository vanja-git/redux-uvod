import { useSelector } from "react-redux";
import CartItem from "./CartItem";


const CartLista = () => {
  const cart = useSelector(state => state.cart); // iz redux stae uzimamo state.cart i stavljamo u nasu pormenjivu cart

  return (
    <div>
      <h2>Sadrzaj vase korpe</h2>
      <div className="artikli-lista">
        {
          cart.map((item)=>{
            return (
              <CartItem key={item.id} item={item}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default CartLista;