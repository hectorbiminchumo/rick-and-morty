const reducer = (globalState, action) => {
  switch (action.type) {
    case "GET_EPISODE":
      return {
        ...globalState,
        singleEpisode: action.payload,
      };
    default:
      return globalState;
  }
};
export default reducer;
