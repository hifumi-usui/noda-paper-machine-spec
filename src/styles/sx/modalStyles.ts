import { SxProps } from "@mui/material";
import { colors } from "../color/colors";

const basicModalBoxStyle: SxProps = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxHeight: "80vh",
  maxWidth: "70vw",
  bgcolor: "#f5f5f7",
  border: "none",
  borderRadius: "5px",
  boxShadow: `0px 0px 2px 1px ${colors.darkGray}`,
  p: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

export { basicModalBoxStyle };
