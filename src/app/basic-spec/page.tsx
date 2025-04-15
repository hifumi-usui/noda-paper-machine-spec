import Layout from "@/components/layout/Layout";
import { okButtonStyle } from "@/styles/sx/buttonStyles";
import { pageContainerStyle } from "@/styles/sx/pageContainerStyle";
import { Button, Stack, TextField, Typography } from "@mui/material";

export default function BasicSpec() {
  return (
    <Layout>
      <Stack sx={{ ...pageContainerStyle }}>
        <Typography variant="h1" fontSize="24px">
          基本仕様ページ
        </Typography>
        <Stack>
          <Stack direction={"row"} gap="10px" width="100%" alignItems="center">
            <TextField size="small" label="検索" variant="outlined" />
            <Button sx={{ ...okButtonStyle }}>検索</Button>
          </Stack>
        </Stack>
      </Stack>
    </Layout>
  );
}
