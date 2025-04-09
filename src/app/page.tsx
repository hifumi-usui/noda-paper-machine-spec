import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      height="100lvh"
      gap={4}
    >
      <Typography variant="h1" fontSize="2rem">
        紙器機械仕様ページへ
        <br />
        ようこそ
      </Typography>
      <Button variant="contained" component={Link} href="/login">
        ログイン画面へ
      </Button>
    </Box>
  );
}
