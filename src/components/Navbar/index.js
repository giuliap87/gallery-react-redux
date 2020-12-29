import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    width: "200px",
    padding: "10px 0 0 15px",
  },
});

function Navbar() {
  const classes = useStyles();

const grayscaleLevel = useSelector((state) => state.grayscaleLevel);
const dispatch = useDispatch();

  return (
    <div className={classes.root}>
      <Typography id="grayscale-slider" gutterBottom>
        Grayscale
      </Typography>
      <Slider
        value={grayscaleLevel}
        onChange={(e, value)=> dispatch({type: "APPLY_GRAY_FILTER", level: value})}
        aria-labelledby="grayscale-slider"
        valueLabelDisplay="auto"
        step={0.1}
        marks
        min={0}
        max={1}
      />
    </div>
  );
}

export default Navbar;
