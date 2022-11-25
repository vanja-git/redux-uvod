const initialState = {
  nesto: "blabla"
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