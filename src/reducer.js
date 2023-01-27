export let initialState = {
  basket: [],
};
export let reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    default:
      console.log(33333);
  }
};
