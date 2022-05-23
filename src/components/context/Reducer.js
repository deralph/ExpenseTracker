export const initialState = {
  expenses: [],
};
const Reducer = (state, action) => {
  console.log(action);
  if (action.type === "SET_EXPENSES") {
    return { ...state, expenses: action.payload };
  }
  if (action.type === "CHECK_OK") {
    return { ...state, check: action.payload };
  }
  return { state };
};

export default Reducer;
