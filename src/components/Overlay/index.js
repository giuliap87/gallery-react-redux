import React from "react";
import { useSelector } from "react-redux";

import pics from "../../pics";
import "./Overlay.css";

function Overlay() {
  const currentPictureId = useSelector((state) => state.currentPictureId);
  const showOverlay = useSelector((state) => state.showOverlay);

  //console.log(currentPictureId)

  return (
    <div className={showOverlay ? "Overlay showing" : "Overlay"}>
      <img alt={pics[currentPictureId].name} src={pics[currentPictureId].src} />
      <p>{pics[currentPictureId].name}</p>
    </div>
  );
}

export default Overlay;
