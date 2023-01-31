export let initialState = {
  basket: [],
};
export let reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state?.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      let index = state?.basket.findIndex(
        (item) => item.id === action.passedId
      );
      if (index >= 0) {
        state?.basket.splice(index, 1);
      }
      return {
        ...state,
        basket: [...state?.basket],
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
        basket: [...state.basket],
      };
    default:
      return 334;
  }
};
