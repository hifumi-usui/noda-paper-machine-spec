"use client";

import { supabase } from "@/lib/supabaseClient";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type AuthContextType = {
  isAuthenticated: boolean;
  isLoading: boolean; // 追加: 認証状態のロード中フラグ
  login: (
    email: string,
    password: string
  ) => Promise<{ data: any; error: any }>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true); // 追加: 初期状態はロード中

  useEffect(() => {
    // ブラウザ環境かチェック
    if (typeof window !== "undefined") {
      const checkAuth = async () => {
        try {
          // 現在のセッションをチェック
          const { data } = await supabase.auth.getSession();

          if (data.session) {
            // セッションが存在する場合
            localStorage.setItem("auth-token", data.session.access_token);
            setIsAuthenticated(true);
          } else {
            // ローカルストレージからトークンを確認
            const token = localStorage.getItem("auth-token");
            if (token) {
              // トークンの有効性を確認
              const { data: userData } = await supabase.auth.getUser();
              setIsAuthenticated(!!userData.user);
            } else {
              setIsAuthenticated(false);
            }
          }
        } catch (error) {
          console.error("認証確認エラー:", error);
          setIsAuthenticated(false);
        } finally {
          setIsLoading(false); // ロード完了
        }
      };

      checkAuth();
    }
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true); // ログイン処理開始

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (!error && data.session) {
        localStorage.setItem("auth-token", data.session.access_token);
        setIsAuthenticated(true);
      }

      return { data, error };
    } finally {
      setIsLoading(false); // ログイン処理完了
    }
  };

  const logout = async () => {
    setIsLoading(true); // ログアウト処理開始

    try {
      await supabase.auth.signOut();
      localStorage.removeItem("auth-token");
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false); // ログアウト処理完了
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
