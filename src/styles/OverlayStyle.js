import { makeStyles } from "@material-ui/core/styles";

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
    "& svg": {
      position: "absolute",
      color: "#ffff",
      opacity: 1,
      marginTop: "-12px"
    },
    "& button": {
      width: "25px",
      height: "30px",
      border: "none",
      cursor: "pointer",
      background: "transparent",
      outlineColor: "#fff",
      position: "absolute",
      top: "45%",
    },
  },
  image: {
    maxHeight: "450px",
    maxWidth: "450px",
  },
  paragraph: {
    backgroundColor: "#fff",
    fontStyle: "italic",
    padding: 0,
    color: "#343536",
  },
  backIcon: { left: "3px" },
  forwardIcon: { right: "-3px" },
  backBtn: { left: "3px" },
  forwardBtn: { right: "3px" },
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

export default useStyles;
