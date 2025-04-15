"use client";

import { Box } from "@mui/material";
import Header from "./Header";
import { ReactNode } from "react";

// ヘッダーの高さ（レスポンシブ対応）
const HEADER_HEIGHT = {
  xs: "56px", // モバイルでの高さ
  sm: "64px", // デスクトップでの高さ
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <Box
        component="main"
        sx={{
          // ヘッダーの高さ分のパディングを上部に追加
          pt: HEADER_HEIGHT,
          // ビューポートの高さいっぱいに表示する場合
          minHeight: `calc(100vh - ${HEADER_HEIGHT.xs})`,
          // レスポンシブ対応
          [`@media (min-width: 600px)`]: {
            pt: HEADER_HEIGHT.sm,
            minHeight: `calc(100vh - ${HEADER_HEIGHT.sm})`,
          },
        }}
      >
        {children}
      </Box>
    </>
  );
}
