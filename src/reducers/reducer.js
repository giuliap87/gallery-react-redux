const initialState = {
  showOverlay: false,
  currentPictureId: 0,
  grayscaleLevel: 0,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "DISPLAY_PICTURE":
      return {
        ...state,
        showOverlay: !state.showOverlay,
        currentPictureId: action.id,
      };
    case "APPLY_GRAY_FILTER":
      return { ...state, grayscaleLevel: action.level };
    default:
      return state;
  }
}

export default reducer;

