import { useSelector } from "react-redux";
import ArtikliItem from "./ArtikliItem";

const ArtikliLista = () => {
  const artikli = useSelector(state => state.artikli); // uzimamo iz reux-a state.artikli i stavljamo u nasu promenjivu artikli
  console.log('artikli koej smo uzeli iz redux statea', artikli)

  return (
    <div>
      <h2>Lista artikala</h2>
      <div className="artikli-lista">
          {
            artikli.map((item)=>{
              return (
                <ArtikliItem key={item.id} item={item}/>
              )
            })
          }

      </div>
    </div>
  )
}

export default ArtikliLista;

// arrow funkcije se pisu na vise nacina
const f1 = () => {};
const f2 = (nekiArgument) => {};
const f3 = nekiArgument => {};
const f4 = (nekiArgument, drugiArgument, treciArgument) => {};
const f5 = (nekiArgument) => { 
  return 5
};
const f6 = (nekiArgument) => 5;

/*
na primer ovo
state => state.artikli

je isto sto i

(state) => {
  return state.artikl
}i

*/