"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Button, Stack, TextField, Typography } from "@mui/material";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      setError(
        "ログインに失敗しました。メールアドレスまたはパスワードが正しいか確認してください。"
      );
    } else {
      setError(null);
      alert("ログイン成功！");
    }
  };

  return (
    <Stack
      height="100lvh"
      justifyContent="center"
      alignItems="center"
      gap="32px"
    >
      <Typography id="login_heading" variant="h1" fontSize="1.5rem">
        ログインフォーム
      </Typography>
      <Stack
        component="form"
        width={560}
        gap="24px"
        aria-labelledby="login_heading"
      >
        <TextField
          label="メールアドレス"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          type="password"
          value={password}
          label="パスワード"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" onClick={handleLogin}>
          ログイン
        </Button>
        {error && (
          <Typography color="error" textAlign="center">
            {error}
          </Typography>
        )}
      </Stack>
    </Stack>
  );
}
