const initialState = {
  drinks: [],
  selected: null
};

function reducer(state, action) {
  switch (action.type) {
    case 'api-response':
      return { ...state, drinks: action.drinks };
    case 'select':
      return { ...state, selected: action.drink };
    case 'close-dialog':
      return { ...state, selected: null };
    case 'order-drink':
      // TODO: make this actually do something
      console.log(`Ordered drink ${action.drink.name}`);
      return { ...state, selected: null };
    default:
      throw new Error('Unexpected action');
  }
}

export { initialState, reducer };
