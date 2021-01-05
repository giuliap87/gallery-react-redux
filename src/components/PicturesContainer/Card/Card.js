import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../PicturesContainer.css";

function Card({ alt, src, id }) {
  const [span, setSpan] = useState(0);
  const grayscaleLevel = useSelector((state) => state.filterReducer.grayscaleLevel);
  const brightnessLevel = useSelector((state) => state.filterReducer.brightnessLevel);
  const saturationLevel = useSelector((state) => state.filterReducer.saturationLevel);
  const sepiaLevel = useSelector((state) => state.filterReducer.sepiaLevel);

  const cardReference = useRef(null);

  useEffect(() => {
    cardReference.current.addEventListener("load", setSpans);
  }, [span]);

  const dispatch = useDispatch();

  function setSpans() {
    const height = cardReference.current.clientHeight;
    const spans = Math.ceil(height / 10) + 1;
    setSpan(spans);
  }

  return (
    <div style={{ gridRowEnd: `span ${span}` }}>
      <img
        ref={cardReference}
        alt={alt}
        src={src}
        id={id}
        style={{
          cursor: "pointer",
          filter: `grayscale(${grayscaleLevel}) brightness(${brightnessLevel}) saturate(${saturationLevel}) sepia(${sepiaLevel})`,
        }}
        onClick={(e) => dispatch({ type: "DISPLAY_PICTURE", id: e.target.id })}
      ></img>
    </div>
  );
}

export default Card;
