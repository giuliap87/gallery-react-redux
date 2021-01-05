import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import pics from "../../pics";
import "./Overlay.css";

function Overlay() {
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
    <div className={showOverlay ? "Overlay showing" : "Overlay fading"}>
      <img
        className="Overlay-img"
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
          className={
            disableBack ? "Overlay-back-icon disabled" : "Overlay-back-icon"
          }
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
        ></ArrowForwardIosIcon>
      </button>
      <p>{pics[currentPictureId].name}</p>
    </div>
  );
}

export default Overlay;
