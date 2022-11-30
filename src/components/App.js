import ArtikliLista from "./ArtikliLista";
import CartIcon from "./CartIcon";
import CartLista from "./CartLista";


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
