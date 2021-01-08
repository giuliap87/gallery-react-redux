import React from "react";
import pics from "../../pics";
import Card from "./Card/Card";
import { useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat( auto-fill, minmax(300px, 1fr))",
    gridAutoRows: 10,
    marginTop: 15,
    "& img": {
      width: 300,
    },
  },
});

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
