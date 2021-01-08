import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import pics from "../../pics";
import "./Overlay.css";

import { makeStyles } from "@material-ui/core/styles";

const showing = {
  opacity: 1,
  zIndex: 1,
  transition: "opacity 0.4s ease-out",
};
const fading = {
  opacity: 0,
  zIndex: -1,
  transition: "opacity 0.3s ease-out",
};

const useStyles = makeStyles({
  root: {
    maxHeight: "470px",
    maxWidth: "450px",
    border: "10px solid #fff",
    borderRadius: "3px",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    boxShadow: "1px 2px 5px rgba(0, 0, 0, 0.7)",
    backgroundColor: "#fff",
    opacity: "0",
    zIndex: "-10",

    transition: "all 0.4s ease-out",
  },
  image: {
    maxHeight: "450px",
    maxWidth: "450px",
  },
  paragraph: {
    backgroundColor: "#fff",
    fontStyle: "italic",
    padding: 0,
    color: "#343536"
  },
  "@media only screen and (max-width: 600px)": {
    root: {
      maxWidth: "370px",
      maxHeight: "370px",
    },
    image: {
      maxWidth: "370px",
      maxHeight: "350px",
    },
  },
});

function Overlay() {
  const classes = useStyles();
  const currentPictureId = useSelector(
    (state) => state.galleryReducer.currentPictureId
  );
  const showOverlay = useSelector((state) => state.galleryReducer.showOverlay);
  const disableBack = useSelector((state) => state.galleryReducer.disableBack);
  const disableForward = useSelector(
    (state) => state.galleryReducer.disableForward
  );
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
    <div className={classes.root} style={showOverlay ? showing : fading}>
      <img
        className={classes.image}
        alt={pics[currentPictureId].name}
        src={pics[currentPictureId].src}
        style={{
          filter: `grayscale(${grayscaleLevel}) brightness(${brightnessLevel}) saturate(${saturationLevel}) sepia(${sepiaLevel})`,
        }}
      />
      <button
        disabled={disableBack}
        className="Overlay-back-btn"
        onClick={() => dispatch({ type: "MOVE_BACK" })}
      >
        <ArrowBackIosIcon
          className="Overlay-back-icon"
          style={disableBack ? { color: "#ccc" } : {}}
        ></ArrowBackIosIcon>
      </button>
      <button
        disabled={disableForward}
        className="Overlay-forward-btn"
        onClick={() => dispatch({ type: "MOVE_FORWARD" })}
      >
        <ArrowForwardIosIcon
          className={
            disableForward
              ? "Overlay-forward-icon disabled"
              : "Overlay-forward-icon"
          }
          style={disableForward ? { color: "#ccc" } : {}}
        ></ArrowForwardIosIcon>
      </button>
      <p className={classes.paragraph}>{pics[currentPictureId].name}</p>
    </div>
  );
}

export default Overlay;
