export const initialState = {
  showOverlay: false,
  currentPictureId: 0,
  disableBack: false,
  disableForward: false,
};

function galleryReducer(state = initialState, action) {
  switch (action.type) {
    case "DISPLAY_PICTURE":
      return {
        ...state,
        showOverlay: !state.showOverlay,
        currentPictureId: +action.id,
        disableBack: false,
        disableForward: false,
      };
    case "MOVE_FORWARD":
      if (state.currentPictureId === 9) {
        return { ...state, disableForward: true };
      } else {
        return {
          ...state,
          currentPictureId: +state.currentPictureId + 1,
          disableForward: false,
          disableBack: false,
        };
      }
    case "MOVE_BACK":
      if (state.currentPictureId === 0) {
        return { ...state, disableBack: true };
      } else {
        return {
          ...state,
          currentPictureId: +state.currentPictureId - 1,
          disableBack: false,
          disableForward: false,
        };
      }
    default:
      return state;
  }
}

export default galleryReducer;
