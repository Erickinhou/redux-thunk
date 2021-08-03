// state is a store, so the data is here and will be manipulate by the reducer
// depending on the action that will be taken
const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'deposit':
      return state + action.payload;
    case 'withdrawn':
      return state - action.payload;
    default:
      return state;
  }
};

export default reducer;
