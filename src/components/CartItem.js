import { useDispatch } from "react-redux";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

const CartItem = (props) => {
  const item = props.item;
  const id = item.id;

  const dispatch = useDispatch(); // ovo je neka vrsta importa dispacth funkcija iz reduxa

  const handleClickRemoveFromCart = (e) => {
    console.log('Remove from cart', id);
    // saljem oporuku reduxu
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: id
    });
  }

  const handleClickKolicinaPlus = (e) => {
    console.log('Klik na plus', id);
    dispatch({
      type: 'CART_PLUS',
      payload: id
    });
  }

  return (
    <div className="artikal-item">
      <div className="tiple">{item.naziv}</div>
      <div className="cena">{item.cena}</div>

      <div className="kolicina-widget">
        <div><AiOutlineMinusCircle /></div>
        <div>{item.kolicina}</div>
        <div onClick={handleClickKolicinaPlus}><AiOutlinePlusCircle /></div>
      </div>


      <button onClick={handleClickRemoveFromCart}>Remove from cart</button>
    </div>
  )
}

export default CartItem;