import { useDispatch } from "react-redux";

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
  
  return (
    <div className="artikal-item">
      <div className="tiple">{item.naziv}</div>
      <div className="cena">{item.cena}</div>

      <div>{item.kolicina}</div>
      <button onClick={handleClickRemoveFromCart}>Remove from cart</button>
    </div>
  )
}

export default CartItem;