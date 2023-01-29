let initialState = {
  loading: false,
  data: undefined,
  error: undefined,
};

export default function getDataReducer(state = initialState, action) {
  switch (action.type) {
    case "PENDING":
      return {
        loading: true,
      };
    case "FULFILLED":
      return {
        loading: false,
        data: action.payload,
      };
    case "REJECTED":
      return {
        loading: false,
        error: action.payload,
        data: undefined,
      };
    default:
      return state;
  }
}
