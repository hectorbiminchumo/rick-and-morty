const reducer = (globalState, action) => {
  switch (action.type) {
    case "CREATE_CHARACTER":
      return {
        ...globalState,
        arrCharacter: [action.payload],
      };

    default:
      return globalState;
  }
};

export default reducer;
