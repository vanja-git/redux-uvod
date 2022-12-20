import ArtikliLista from "./ArtikliLista";
import CartIcon from "./CartIcon";
import CartLista from "./CartLista";


/*
TODO
- funkcija za shop add to cart i slicne, da imaju vise verzija
- dodati pravu ikonicu za korpu.. ujedno primer koriscnenja tudjih gotovih kompnenti.

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
