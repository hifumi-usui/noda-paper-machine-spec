import { colors, buttonColors } from "../color/colors";
import { SxProps } from "@mui/material";

export const filledButtonStyle: SxProps = {
  backgroundColor: buttonColors.filledButtonColor,
  color: colors.white,
  transition: "all 0.5s",
  padding: "6px 20px",
  fontSize: "16px",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: buttonColors.filledButtonColor,
    transform: "scale(1.0125)",
    opacity: 0.8,
  },
  "&:hover .MuiSvgIcon-root": {
    color: colors.white,
  },
};

export const filledTonalButtonStyle: SxProps = {
  backgroundColor: buttonColors.filledTonalButtonColor,
  color: colors.black,
  transition: "all 0.5s",
  padding: "6px 20px",
  fontSize: "16px",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: buttonColors.filledTonalButtonColor,
    transform: "scale(1.0125)",
    color: colors.black,
    opacity: 0.8,
  },
  "&:hover .MuiSvgIcon-root": {
    color: colors.black,
  },
};

export const elevatedButtonStyle: SxProps = {
  backgroundColor: buttonColors.elevatedButtonColor,
  color: colors.primary,
  transition: "all 0.3s",
  padding: "6px 20px",
  fontSize: "16px",
  fontWeight: "bold",
  boxShadow: "0px 0px 2px 1px #555555",
  "&:hover": {
    backgroundColor: buttonColors.elevatedButtonColor,
    transform: "scale(1.0125)",
    color: colors.primary,
    opacity: 0.8,
  },
  "&:hover .MuiSvgIcon-root": {
    color: colors.primary,
  },
};

export const outlinedButtonStyle: SxProps = {
  backgroundColor: colors.white,
  color: colors.black,
  border: `3px solid ${colors.darkGray}`,
  transition: "all 0.5s",
  padding: "6px 20px",
  fontSize: "16px",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: colors.white,
    border: `3px solid ${buttonColors.outlinedButtonColor}`,
    transform: "scale(1.0125)",
    color: buttonColors.outlinedButtonColor,
    opacity: 0.8,
  },
  "&:hover .MuiSvgIcon-root": {
    color: colors.primary,
  },
  // リップルの色を変更
  "& .MuiTouchRipple-root": {
    color: colors.gray,
  },
};

export const textButtonStyle: SxProps = {
  backgroundColor: "transparent",
  color: colors.accent,
  border: `3px solid transparent`,
  boxShadow: "none",
  padding: "6px 20px",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "underline",
  textDecorationThickness: "2px",
  "&:hover": {
    backgroundColor: "#F5F5F7",
    color: colors.accent,
    textDecoration: "underline",
    textDecorationThickness: "2px",
    transform: "scale(1.0125)",
    opacity: 0.8,
  },
  "&:hover .MuiSvgIcon-root": {
    color: colors.accent,
  },
};

export const alertFilledButtonStyle: SxProps = {
  backgroundColor: colors.alertColor,
  color: colors.white,
  border: `3px solid ${colors.alertColor}`,
  transition: "all 0.5s",
  padding: "6px 20px",
  fontSize: "16px",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: colors.alertColor,
    transform: "scale(1.0125)",
    opacity: 0.8,
  },
  "&:hover .MuiSvgIcon-root": {
    color: colors.alertColor,
  },
};

export const alertOutlinedButtonStyle: SxProps = {
  backgroundColor: "transparent",
  color: colors.alertColor,
  transition: "all 0.5s",
  padding: "6px 20px",
  fontSize: "16px",
  fontWeight: "bold",
  border: `3px solid ${colors.alertColor}`,
  "&:hover": {
    backgroundColor: "transparent",
    color: colors.alertColor,
    border: `3px solid ${colors.alertColor}`,
    transform: "scale(1.0125)",
    opacity: 0.8,
  },
  // リップルの色を変更
  "& .MuiTouchRipple-root": {
    color: colors.gray,
  },
};

export const alertTextButtonStyle: SxProps = {
  backgroundColor: "transparent",
  color: colors.alertColor,
  border: "none",
  boxShadow: "none",
  padding: "6px 20px",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "underline",
  textDecorationThickness: "2px",
  "&:hover": {
    backgroundColor: "transparent",
    color: colors.alertColor,
    textDecoration: "underline",
    textDecorationThickness: "2px",
    transform: "scale(1.0125)",
    opacity: 0.8,
  },
  "&:hover .MuiSvgIcon-root": {
    color: colors.alertColor,
  },
};

export const cancelButtonStyle: SxProps = {
  backgroundColor: colors.white,
  color: colors.muiPrimary,
  padding: "6px 20px",
  fontSize: "16px",
  fontWeight: "bold",
  border: `2px solid ${colors.muiPrimary}`,
  transition: "all 0.5s",
  "&:hover": {
    backgroundColor: colors.white,
    color: colors.muiPrimary,
    transform: "scale(1.0125)",
    border: `2px solid ${colors.muiPrimary}`,
    opacity: 0.8,
  },
  "&:hover .MuiSvgIcon-root": {
    color: colors.muiPrimary,
  },
};

export const okButtonStyle: SxProps = {
  backgroundColor: colors.muiPrimary,
  color: colors.white,
  transition: "all 0.5s",
  padding: "3px 20px",
  fontSize: "16px",
  fontWeight: "bold",
  border: `2px solid ${colors.muiPrimary}`,
  "&:hover": {
    backgroundColor: colors.muiPrimary,
    color: colors.white,
    border: `2px solid ${colors.muiPrimary}`,
    transform: "scale(1.0125)",
    opacity: 0.8,
  },
  "&:hover .MuiSvgIcon-root": {
    color: colors.white,
  },
};
