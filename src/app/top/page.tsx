"use client";

import Layout from "@/components/layout/Layout";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/lib/supabaseClient";
import { outlinedButtonStyle } from "@/styles/sx/buttonStyles";
import { pageContainerStyle } from "@/styles/sx/pageContainerStyle";
import { Stack, Typography, Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Top() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const { logout } = useAuth();

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

  const handleLogout = async () => {
    await logout();
    router.push("/login");
  };

  if (loading) return <p>読み込み中...</p>;

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
        <Button
          sx={{ ...outlinedButtonStyle, width: "200px" }}
          onClick={handleLogout}
        >
          ログアウト
        </Button>
      </Stack>
    </Layout>
  );
}
