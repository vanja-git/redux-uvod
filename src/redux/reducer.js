
const artikli = [
  {
    id: 1,
    naziv: "Lopta",
    cena: 3000
  },

  {
    id: 2,
    naziv: "Majica",
    cena: 2000
  },

  {
    id: 3,
    naziv: "Cipela",
    cena: 4000
  },

  {
    id: 4,
    naziv: "Kais",
    cena: 1000
  }

];



const initialState = {
  nesto: "blabla",
  artikli: artikli
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'NEKI_ACTION':
      return state;

    default:
      return state;
      break;
  }
};

export default rootReducer;