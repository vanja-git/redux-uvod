import { useDispatch } from "react-redux";

const ArtikliItem = (props) => {
  const item = props.item;
  const id = item.id;

  const dispatch = useDispatch(); // ovo je neka vrsta importa dispacth funkcija iz reduxa

  const handleClickAddToCart = (e) => {
    console.log('Add to cart', id);
    // saljem oporuku reduxu
    dispatch({
      type: 'MOLIM_VAS_DODAJTE_OVO_U_CART',
      payload: item
    });
  }
  
  return (
    <div className="artikal-item">
      <div className="tiple">{item.naziv}</div>
      <div className="cena">{item.cena}</div>
      <button onClick={handleClickAddToCart}>Add to cart</button>
    </div>
  )
}

export default ArtikliItem;