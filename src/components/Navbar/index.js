import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CustomSlider from "./CustomSlider";

import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  navbar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 80,
  },

  sliderLabel: {
    fontSize: 15,
  },
  slider: {
    padding: "10px 10px 0 20px",
    width: "10%",
  },
  resetButton: {
    margin: "0 3% 0 10%",
    padding: "5px 15px",
  },
  "@media screen and (max-width: 600px)": {
    sliderLabel: {
      fontSize: 12,
    },
    resetButton: {
      padding: "3px 13px",
    },
  },
});

function Navbar() {
  const classes = useStyles();

  const grayscaleLevel = useSelector(
    (state) => state.filterReducer.grayscaleLevel
  );
  const brightnessLevel = useSelector(
    (state) => state.filterReducer.brightnessLevel
  );
  const saturationLevel = useSelector(
    (state) => state.filterReducer.saturationLevel
  );
  const sepiaLevel = useSelector((state) => state.filterReducer.sepiaLevel);

  const dispatch = useDispatch();

  return (
    <header className={classes.navbar}>
      <CustomSlider
        name="Grayscale"
        id="grayscale-slider"
        value={grayscaleLevel}
        onChange={(e, value) =>
          dispatch({ type: "APPLY_GRAY_FILTER", level: value })
        }
        valueLabelDisplay="auto"
        step={0.1}
        min={0}
        max={1}
        marks
      />
      <CustomSlider
        name="Brightness"
        id="brightness-slider"
        value={brightnessLevel}
        onChange={(e, value) =>
          dispatch({ type: "APPLY_BRIGHTNESS_FILTER", level: value })
        }
        valueLabelDisplay="auto"
        step={0.1}
        min={0}
        max={2}
        marks
      />
      <CustomSlider
        name="Saturation"
        id="saturation-slider"
        value={saturationLevel}
        onChange={(e, value) =>
          dispatch({ type: "APPLY_SATURATION_FILTER", level: value })
        }
        valueLabelDisplay="auto"
        step={0.5}
        min={-5}
        max={5}
        marks
      />
      <CustomSlider
        name="Sepia"
        id="sepia-slider"
        value={sepiaLevel}
        onChange={(e, value) =>
          dispatch({ type: "APPLY_SEPIA_FILTER", level: value })
        }
        valueLabelDisplay="auto"
        step={0.1}
        min={0}
        max={1}
        marks
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => dispatch({ type: "RESET_FILTER" })}
        className={classes.resetButton}
      >
        Reset
      </Button>
    </header>
  );
}

export default Navbar;
