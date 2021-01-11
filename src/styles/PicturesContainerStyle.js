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

export default useStyles;
