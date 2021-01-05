export const initialState = {
  grayscaleLevel: 0,
  brightnessLevel: 1,
  saturationLevel: 1,
  sepiaLevel: 0,
};

function filtersReducer(state = initialState, action) {
  switch (action.type) {
    case "APPLY_GRAY_FILTER":
      return { ...state, grayscaleLevel: action.level };
    case "APPLY_BRIGHTNESS_FILTER":
      return { ...state, brightnessLevel: action.level };
    case "APPLY_SATURATION_FILTER":
      return { ...state, saturationLevel: action.level };
    case "APPLY_SEPIA_FILTER":
      return { ...state, sepiaLevel: action.level };
    case "RESET_FILTER":
      return {
        ...state,
        grayscaleLevel: 0,
        brightnessLevel: 1,
        saturationLevel: 1,
        sepiaLevel: 0,
      };
    default:
      return state;
  }
}

export default filtersReducer;
