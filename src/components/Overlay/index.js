import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import pics from "../../pics";
import useStyles from "../../styles/OverlayStyle";

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
          className={classes.backBtn}
          onClick={() => dispatch({ type: "MOVE_BACK" })}
        >
          <ArrowBackIosIcon
            className={classes.backIcon}
            style={disableBack ? { color: "#ccc" } : {}}
          ></ArrowBackIosIcon>
        </button>
        <button
          disabled={disableForward}
          className={classes.forwardBtn}
          onClick={() => dispatch({ type: "MOVE_FORWARD" })}
        >
          <ArrowForwardIosIcon
            className={classes.forwardIcon}
            style={disableForward ? { color: "#ccc" } : {}}
          ></ArrowForwardIosIcon>
        </button>
        <p className={classes.paragraph}>{pics[currentPictureId].name}</p>
      </div>
  );
}

export default Overlay;
