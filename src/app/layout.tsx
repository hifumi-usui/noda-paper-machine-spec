import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import Layout from "@/components/layout/Layout";
import { AuthProvider } from "@/contexts/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "紙器機械仕様システム",
  description: "紙器機械仕様管理システム",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <AuthProvider>
          <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
