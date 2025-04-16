"use client";

import Layout from "@/components/layout/Layout";

import { supabase } from "@/lib/supabaseClient";
import { okButtonStyle } from "@/styles/sx/buttonStyles";
import { pageContainerStyle } from "@/styles/sx/pageContainerStyle";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation"; // ✅ App Router ではこれ

import { useEffect, useState } from "react";

export default function BasicSpec() {
  const [loading, setLoading] = useState(true);
  const [machines, setMachines] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchError, setSearchError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        router.push("/login");
      } else {
        setLoading(false);
      }
    };
    checkUser();
  }, []);

  const searchMachineSpecs = async () => {
    try {
      const res = await fetch("/api/machine-specs");
      const data = await res.json();

      if (!res.ok) {
        setSearchError("データ取得に失敗しました");
        return;
      }

      setMachines(data); // ← ここでステートにセット
      console.log(data);
    } catch (err) {
      setSearchError("通信エラーが発生しました");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      searchMachineSpecs();
    }
  };

  if (loading) return <p>読み込み中...</p>;

  return (
    <Layout>
      <Stack sx={{ ...pageContainerStyle }}>
        <Typography variant="h1" fontSize="24px">
          基本仕様ページ
        </Typography>
        <Stack>
          <Stack direction={"row"} gap="10px" width="100%" alignItems="center">
            <TextField
              size="small"
              label="検索"
              variant="outlined"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <Button sx={{ ...okButtonStyle }} onClick={searchMachineSpecs}>
              検索
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Layout>
  );
}
