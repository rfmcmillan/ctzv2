import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
const NavButton = withStyles({
  root: {
    color: "white",
    fontSize: "medium",
    textTransform: "none",
    fontWeight: "bold",
    fontFamily: ["Roboto", "sans-serif"].join(","),
  },
})(Button);

export default NavButton;
