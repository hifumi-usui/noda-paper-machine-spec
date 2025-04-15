import { colors } from "../color/colors";
import { SxProps } from "@mui/system";

interface MenuStyles {
  menuContainer: SxProps;
  menuTitle: SxProps;
  menuInsideContainer: SxProps;
}

const menuStyles: MenuStyles = {
  menuContainer: {
    marginTop: "15px",
    border: "none",
    boxShadow: `0px 0px 2px 1px ${colors.darkGray}`,
    borderRadius: "7px",
    maxWidth: "95vw",
    backgroundColor: "rgba(253, 253, 253, 0.5)",
  },
  menuTitle: {
    fontSize: "1.4em",
    fontWeight: "bold",
    color: `${colors.black}`,
    backgroundColor: "rgba(253, 253, 253, 0.7)",
    borderRadius: "8px 8px 0px 0px",
    padding: "5px",
    textAlign: "center",
    position: "relative",
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: "10px",
      right: "10px",
      height: "2px",
      backgroundColor: "#616161",
    },
  },
  menuInsideContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "15px",
  },
};

export { menuStyles };
