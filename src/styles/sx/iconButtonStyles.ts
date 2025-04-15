import { buttonColors, colors } from "../color/colors";
import { SxProps } from "@mui/material";

const iconButtonStyles: { [key: string]: SxProps } = {
  iconButtonStyle: {
    color: colors.black,
    transition: "all 0.6s",
    position: "relative",
    "&::after": {
      content: '""',
      position: "absolute",
      left: "20%",
      bottom: 6,
      width: "60%",
      height: "2px",
      backgroundColor: colors.primary,
      transform: "scaleX(0)",
      transformOrigin: "left",
      transition: "transform 0.6s",
    },
    "&:hover": {
      color: colors.primary,
    },
    "&:hover::after": {
      transform: "scaleX(1)",
    },
  },
  stepperIconRemoveButtonStyle: {
    color: colors.black,
    border: `2px solid ${colors.black}`,
    transition: "all 0.6s",
    position: "relative",
    overflow: "hidden",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: buttonColors.elevatedButtonColor,
      transition: "transform 0.6s",
      transform: "scaleY(0)",
      transformOrigin: "top",
      zIndex: 0,
    },
    "&:hover::before": {
      transform: "scaleY(1)",
    },
    "&:hover": {
      color: colors.primary,
      border: `2px solid ${colors.primary}`,
    },
    "& > *": {
      position: "relative",
      zIndex: 1,
    },
  },
  stepperIconAddButtonStyle: {
    color: colors.black,
    border: `2px solid ${colors.black}`,
    transition: "all 0.6s",
    position: "relative",
    overflow: "hidden",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: buttonColors.elevatedButtonColor,
      transition: "transform 0.6s",
      transform: "scaleY(0)",
      transformOrigin: "bottom",
      zIndex: 0,
    },
    "&:hover::before": {
      transform: "scaleY(1)",
    },
    "&:hover": {
      color: colors.primary,
      border: `2px solid ${colors.primary}`,
    },
    "& > *": {
      position: "relative",
      zIndex: 1,
    },
  },
};

export { iconButtonStyles };
