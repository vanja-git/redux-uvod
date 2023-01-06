import { useSelector } from "react-redux";
import PageCart from "./PageCart";
import PageHome from "./PageHome";

const NevidljiviRuter = () => {
  const route = useSelector(state => state.nevidljivaRuta)

  let jsx = null;
  if (route === 'HOME') {
    jsx = (<PageHome/>)
  } else if (route === 'CART') {
    jsx = (<PageCart />)
  } else {
    // ako ni jedan od uslova tj. ni jedna ruta nije pronadjena
    jsx = (<div>Route not found</div>)
  }

  return (
    <div>
      {jsx}
    </div>
  )
}

export default NevidljiviRuter;