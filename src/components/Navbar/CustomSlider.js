import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";

import useStyles from "../../styles/CustomSliderStyle";

const CustomSlider = withStyles({
  root: {
    margin: "0 10px",
    width: 100,
  },
  thumb: {
    height: 11,
    width: 11,
    backgroundColor: " rgba(63, 81, 181)",
    border: "2px solid currentColor",
    marginTop: -5,
    marginLeft: -5,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  valueLabel: {
    top: -23,
    left: "calc(-50% + -6px)",
    color: " rgba(63, 81, 181, 1)",
    "& span": {
      height: "25px",
      width: "25px",
      lineHeight: "25px",
    },
  },
  track: {
    height: 2,
    borderRadius: 4,
  },
  rail: {
    height: 2,
    borderRadius: 4,
  },
  mark: {
    backgroundColor: "#fff",
    width: 1,
    opacity: 0.9,
  },
  markActive: {
    opacity: 0.8,
    backgroundColor: "#fff",
  },
  "@media screen and (max-width: 600px)": {
    root: {
      width: 50,
    },
    valueLabel: {
      top: -19,
      left: "calc(-50% + -3px)",
      "& span": {
        height: "20px",
        width: "20px",
        lineHeight: "20px",
        fontSize: 10,
      },
    },
  },
})(Slider);

export default function CustomizedSlider(props) {
  const classes = useStyles();

  return (
    <div className={classes.slider}>
      <Typography
        gutterBottom
        color="primary"
        className={classes.label}
        id={props.id}
      >
        {props.name}
      </Typography>
      <CustomSlider
        value={props.value}
        valueLabelDisplay="auto"
        aria-labelledby={props.id}
        step={props.step}
        min={props.min}
        max={props.max}
        onChange={props.onChange}
        marks
      />
    </div>
  );
}
