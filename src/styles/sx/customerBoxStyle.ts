import { SxProps } from "@mui/material";
import { colors } from "../color/colors";

const customerBoxStyle: SxProps = {
  backgroundColor: colors.backgroundColor,
  backgroundImage: "url('/background-image/back-ground-paper-1.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
};

const customerInsideBoxStyle: SxProps = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  marginTop: "15px",
  marginLeft: "auto",
  marginRight: "auto",
  marginBottom: "15px",
  padding: "15px",
  minWidth: "350px",
  backgroundColor: "#fdfdfd",
  boxShadow: "0px 0px 2px 1px #616161",
  borderRadius: "5px",
};

export { customerBoxStyle, customerInsideBoxStyle };
