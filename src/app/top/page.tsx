import Layout from "@/components/layout/Layout";
import { outlinedButtonStyle } from "@/styles/sx/buttonStyles";
import { pageContainerStyle } from "@/styles/sx/pageContainerStyle";
import { Stack, Typography, Button } from "@mui/material";
import Link from "next/link";

export default function Top() {
  return (
    <Layout>
      <Stack sx={{ ...pageContainerStyle }}>
        <Typography variant="h1" fontSize="24px">
          紙器機械仕様ページＴＯＰ
        </Typography>
        <Link href="/basic-spec" style={{ textDecoration: "none" }}>
          <Button sx={{ ...outlinedButtonStyle, width: "200px" }}>
            基本仕様
          </Button>
        </Link>
      </Stack>
    </Layout>
  );
}
