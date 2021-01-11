import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  navbar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 80,
  },

  sliderLabel: {
    fontSize: 15,
  },
  slider: {
    padding: "10px 10px 0 20px",
    width: "10%",
  },
  resetButton: {
    margin: "0 3% 0 10%",
    padding: "5px 15px",
  },
  "@media screen and (max-width: 600px)": {
    sliderLabel: {
      fontSize: 12,
    },
    resetButton: {
      padding: "3px 13px",
    },
  },
});

export default useStyles;