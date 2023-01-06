import { useDispatch } from "react-redux";
import ArtikliLista from "./ArtikliLista";
import CartIcon from "./CartIcon";
import CartLista from "./CartLista";
import NevidljiviRuter from "./NevidljiviRuter";


/*
TODO
+ funkcija za shop add to cart i slicne, da imaju vise verzija
+ dodati pravu ikonicu za korpu.. ujedno primer koriscnenja tudjih gotovih kompnenti.
+ dodati badge na ikonicu za korpu
- kada bdue rutiranje, da se prikazuje smao cart ikonica a kad se klikne na nju ostvara se strancia sa celom korpom
+ unutar carta da imam buttone za + - kolicine
+ na kolicina nula da brise iz ccarta
- da taster minus postane iskljucen kaa je kolcina 1.

*/

function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Aplikacija za vezbanje klasicnog reduxa</h1>
      <nav>
        <div onClick={() => {
          dispatch({
            type: 'SET_ROUTE',
            payload: 'HOME'
          })
        }}>Pocetna</div>
        <div onClick={() => {
          dispatch({
            type: 'SET_ROUTE',
            payload: 'ABOUT'
          })
        }}>About</div>
        <div onClick={() => {
          dispatch({
            type: 'SET_ROUTE',
            payload: 'CART'
          })
        }}>
          <CartIcon />
        </div>
      </nav>
      <NevidljiviRuter />
    </div>
  );
}

export default App;
