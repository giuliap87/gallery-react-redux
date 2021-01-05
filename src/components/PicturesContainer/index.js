import React from "react";
import pics from "../../pics";
import Card from "./Card/Card";
import { useSelector } from "react-redux";

import "./PicturesContainer.css";

function PictureContainer() {
  const showOverlay = useSelector((state) => state.galleryReducer.showOverlay);
  return (
    <div className={showOverlay ? "pics-container filter" : "pics-container"}>
      {pics.map((pic) => (
        <Card key={pic.id} id={pic.id} alt={pic.name} src={pic.src} />
      ))}
    </div>
  );
}

export default PictureContainer;
