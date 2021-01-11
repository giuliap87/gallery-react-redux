import React from "react";
import { useSelector } from "react-redux";

import pics from "../../pics";
import Card from "./Card/Card";

import useStyles from "../../styles/PicturesContainerStyle";

function PictureContainer() {
  const classes = useStyles();
  const showOverlay = useSelector((state) => state.galleryReducer.showOverlay);

  return (
    <div
      className={classes.container}
      style={showOverlay ? { filter: "blur(2px) grayscale(1)" } : {}}
    >
      {pics.map((pic) => (
        <Card key={pic.id} id={pic.id} alt={pic.name} src={pic.src} />
      ))}
    </div>
  );
}

export default PictureContainer;
