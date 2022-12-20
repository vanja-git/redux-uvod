import ArtikliLista from "./ArtikliLista";
import CartIcon from "./CartIcon";
import CartLista from "./CartLista";


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
  return (
    <div className="App">
      <h1>Aplikacija za vezbanje klasicnog reduxa</h1>
      <CartIcon />
      <ArtikliLista />
      <CartLista />
    </div>
  );
}

export default App;
