import { addToCartHelper2, cartPlusHelper } from "../utils/cart-utils";

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
  artikli: artikli,
  cart:[]
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'MOLIM_VAS_DODAJTE_OVO_U_CART':
      return {
        ...state,
        // cart: [...state.cart, action.payload]
        cart: addToCartHelper2(state.cart, action.payload)
      };

    case "REMOVE_FROM_CART":
      const idZaBrisanje = action.payload;
      const updateCart = state.cart.filter((item) => {
        if (item.id === idZaBrisanje) {
          // to je taj koji ima ID koji hocemo da ga brisemo iz carta
          return false; // false znaci nece uci u statv novog niza
        }
        // svi ostali ostaju u nizu
        return true; // true znaci ostaje u nizu
      })
      return {
        ...state,
        cart: updateCart
      };

      case "CART_PLUS":
        return {
          ...state,
          cart: cartPlusHelper(state.cart, action.payload)
        }

    default:
      return state;
      break;
  }
};

export default rootReducer;