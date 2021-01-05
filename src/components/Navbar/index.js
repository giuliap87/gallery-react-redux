import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";

import "./Navbar.css"

function Navbar() {
  
  const grayscaleLevel = useSelector((state) => state.filterReducer.grayscaleLevel);
  const brightnessLevel = useSelector((state) => state.filterReducer.brightnessLevel);
  const saturationLevel = useSelector((state) => state.filterReducer.saturationLevel);
  const sepiaLevel = useSelector((state) => state.filterReducer.sepiaLevel);

  const dispatch = useDispatch();

  return (
    <header className="Navbar">
      <div className="Navbar--slider">
        <Typography id="grayscale-slider">
          Grayscale
        </Typography>
        <Slider
          value={grayscaleLevel}
          onChange={(e, value) =>
            dispatch({ type: "APPLY_GRAY_FILTER", level: value })
          }
          aria-labelledby="grayscale-slider"
          valueLabelDisplay="auto"
          step={0.1}
          marks
          min={0}
          max={1}
        />
      </div>
      <div className="Navbar--slider">
        <Typography id="brightness-slider">
          Brightness
        </Typography>
        <Slider
          value={brightnessLevel}
          onChange={(e, value) =>
            dispatch({ type: "APPLY_BRIGHTNESS_FILTER", level: value })
          }
          aria-labelledby="brightness-slider"
          valueLabelDisplay="auto"
          step={0.1}
          marks
          min={0}
          max={2}
        />
      </div>
      <div className="Navbar--slider">
        <Typography id="saturation-slider">
          Saturation
        </Typography>
        <Slider
          value={saturationLevel}
          onChange={(e, value) =>
            dispatch({ type: "APPLY_SATURATION_FILTER", level: value })
          }
          aria-labelledby="saturation-slider"
          valueLabelDisplay="auto"
          step={0.5}
          marks
          min={-5}
          max={5}
        />
      </div>
      <div className="Navbar--slider">
        <Typography id="sepia-slider">
          Sepia
        </Typography>
        <Slider
          value={sepiaLevel}
          onChange={(e, value) =>
            dispatch({ type: "APPLY_SEPIA_FILTER", level: value })
          }
          aria-labelledby="sepia-slider"
          valueLabelDisplay="auto"
          step={0.1}
          marks
          min={0}
          max={1}
        />
      </div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => dispatch({ type: "RESET_FILTER" })}
      >
        Reset
      </Button>
    </header>
  );
}

export default Navbar;
