import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    padding: "10px 10px 0 20px",
    width: "10%",
  },
  label: {
    fontSize: 15,
  },
  "@media screen and (max-width: 600px)": {
    label: {
      fontSize: 12,
    },
  },
});

export default useStyles;
