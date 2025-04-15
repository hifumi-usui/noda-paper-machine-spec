import { SxProps } from "@mui/material";
import { colors } from "../color/colors";

const administratorBoxStyle: SxProps = {
  backgroundColor: colors.backgroundColor,
  backgroundImage: "url('/background-image/back-ground-paper-3.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
};

const administratorInsideBoxStyle: SxProps = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  marginTop: "15px",
  marginLeft: "auto",
  marginRight: "auto",
  marginBottom: "15px",
  padding: "1em",
  // maxWidth: "40%",
  minWidth: "350px",
  backgroundColor: "#fdfdfd",
  boxShadow: "0px 0px 2px 1px #616161",
  borderRadius: "5px",
};

export { administratorBoxStyle, administratorInsideBoxStyle };
