"use client";

import Layout from "@/components/layout/Layout";

import { supabase } from "@/lib/supabaseClient";
import { okButtonStyle } from "@/styles/sx/buttonStyles";
import { pageContainerStyle } from "@/styles/sx/pageContainerStyle";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Divider,
  IconButton,
  Modal,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

interface MachineSpec {
  id: number;
  machineManufacturerId: string;
  machineManufacturerName: string;
  machineName: string;
  machineType: string;
}

// 詳細情報を含む拡張された機械仕様インターフェース
interface MachineSpecDetail extends MachineSpec {
  // 必要に応じて詳細情報のフィールドを追加
  description?: string;
  specifications?: any;
  createdAt?: string;
  updatedAt?: string;
  // 他の必要なフィールド
}

// 固定表示行数
const FIXED_ROWS_PER_PAGE = 10;

// モーダルのスタイル
const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    xs: "90%",
    sm: "80%",
    md: "70%",
    lg: "60%",
  },
  maxHeight: "80vh",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  overflow: "auto",
};

export default function BasicSpec() {
  const [loading, setLoading] = useState(true);
  const [machines, setMachines] = useState<MachineSpec[]>([]);
  const [searchText, setSearchText] = useState("");
  const [searchError, setSearchError] = useState("");
  const [isSearched, setIsSearched] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const router = useRouter();

  // モーダル関連の状態
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMachine, setSelectedMachine] =
    useState<MachineSpecDetail | null>(null);
  const [detailLoading, setDetailLoading] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        router.push("/login");
      } else {
        setLoading(false);
        // 初期データ取得
        fetchInitialData();
      }
    };
    checkUser();
  }, []);

  // 初期表示用データの取得
  const fetchInitialData = async () => {
    try {
      const res = await fetch("/api/machine-specs?limit=10");
      if (!res.ok) {
        throw new Error("初期データの取得に失敗しました");
      }
      const data = await res.json();
      setMachines(data);
    } catch (err) {
      console.error("初期データ取得エラー:", err);
      setSearchError("初期データの取得に失敗しました");
    }
  };

  const searchMachineSpecs = async () => {
    try {
      setSearchError("");

      const res = await fetch(
        `/api/find-machine-specs?q=${encodeURIComponent(searchText)}`
      );
      const data = await res.json();

      setMachines(data);

      if (!res.ok) {
        setSearchError("データ取得に失敗しました");
        return;
      }

      console.log(data);
    } catch (err) {
      setSearchError("通信エラーが発生しました");
    }
  };

  // 機械詳細データの取得
  const fetchMachineDetail = async (id: number) => {
    setDetailLoading(true);
    try {
      const res = await fetch(`/api/machine-specs/${id}`);
      if (!res.ok) {
        throw new Error("詳細データの取得に失敗しました");
      }
      const data = await res.json();
      setSelectedMachine(data);
    } catch (err) {
      console.error("詳細データ取得エラー:", err);
    } finally {
      setDetailLoading(false);
    }
  };

  // 行クリック時の処理
  const handleRowClick = (machine: MachineSpec) => {
    setSelectedMachine(machine as MachineSpecDetail); // 基本情報をセット
    setModalOpen(true);
    fetchMachineDetail(machine.id); // 詳細情報を取得
  };

  // モーダルを閉じる処理
  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedMachine(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      searchMachineSpecs();
    }
  };

  // ページ変更ハンドラ
  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  // 1ページあたりの行数変更ハンドラ
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // 現在のページに表示するデータ
  const paginatedMachines = machines.slice(
    page * FIXED_ROWS_PER_PAGE,
    (page + 1) * FIXED_ROWS_PER_PAGE
  );

  // 空白行を追加するために必要な数を計算
  const emptyRowsCount =
    FIXED_ROWS_PER_PAGE -
    Math.min(FIXED_ROWS_PER_PAGE, paginatedMachines.length);

  // 空白行の配列
  const emptyRows = Array(emptyRowsCount).fill(0);

  if (loading)
    return (
      <Layout>
        <Stack sx={{ ...pageContainerStyle }}>
          <Typography>読み込み中...</Typography>
        </Stack>
      </Layout>
    );

  return (
    <Layout>
      <Stack sx={{ ...pageContainerStyle }}>
        <Typography variant="h1" fontSize="24px" marginTop={"20px"}>
          機械選択
        </Typography>
        <Stack>
          <Stack
            direction={"row"}
            gap="10px"
            width="100%"
            alignItems="center"
            justifyContent={"center"}
            marginTop={"20px"}
          >
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

          {/* エラーメッセージ */}
          {searchError && <Alert severity="error">{searchError}</Alert>}

          {/* テーブル表示 */}
          {machines.length > 0 ? (
            <TableContainer component={Paper} sx={{ mt: 3 }}>
              <Table size="small">
                <TableHead>
                  <TableRow sx={{ backgroundColor: "#f5f5f7" }}>
                    <TableCell>ID</TableCell>
                    <TableCell>メーカーID</TableCell>
                    <TableCell>メーカー名</TableCell>
                    <TableCell>機械名</TableCell>
                    <TableCell>機械タイプ</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {paginatedMachines.map((machine) => (
                    <TableRow
                      key={machine.id}
                      hover
                      onClick={() => handleRowClick(machine)}
                      sx={{ cursor: "pointer" }}
                    >
                      <TableCell>{machine.id}</TableCell>
                      <TableCell>{machine.machineManufacturerId}</TableCell>
                      <TableCell>{machine.machineManufacturerName}</TableCell>
                      <TableCell>{machine.machineName}</TableCell>
                      <TableCell>{machine.machineType}</TableCell>
                    </TableRow>
                  ))}
                  {/* 空白行の追加 */}
                  {emptyRows.map((_, index) => (
                    <TableRow key={`empty-${index}`} sx={{ height: 33 }}>
                      <TableCell colSpan={5} />
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              {/* ページネーション */}
              <TablePagination
                rowsPerPageOptions={[FIXED_ROWS_PER_PAGE]}
                component="div"
                count={machines.length}
                rowsPerPage={FIXED_ROWS_PER_PAGE}
                page={page}
                onPageChange={handleChangePage}
                // onRowsPerPageChangeは不要になるので削除
                labelRowsPerPage="表示件数:"
                labelDisplayedRows={({ from, to, count }) =>
                  `${from}-${to} / ${count}`
                }
                sx={{
                  ".MuiToolbar-root": {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    "& .MuiTablePagination-spacer": {
                      display: "none",
                    },
                    "& .MuiTablePagination-selectLabel": {
                      display: "none", // 表示件数選択ラベルを非表示に
                    },
                    "& .MuiTablePagination-select": {
                      display: "none", // 表示件数選択を非表示に
                    },
                    "& .MuiTablePagination-selectIcon": {
                      display: "none", // 表示件数選択アイコンを非表示に
                    },
                    "& .MuiTablePagination-displayedRows": {
                      margin: "0 16px",
                    },
                  },
                }}
              />
            </TableContainer>
          ) : (
            <Alert severity="info" sx={{ mt: 3 }}>
              {isSearched ? "検索結果は0件です" : "表示するデータがありません"}
            </Alert>
          )}
        </Stack>
      </Stack>
      {/* 機械仕様詳細モーダル */}
      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        aria-labelledby="machine-detail-modal"
      >
        <Box sx={modalStyle}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            mb={2}
          >
            <Typography variant="h6" component="h2">
              機械仕様詳細
            </Typography>
            <IconButton onClick={handleCloseModal} edge="end">
              <CloseIcon />
            </IconButton>
          </Stack>

          <Divider sx={{ mb: 2 }} />

          {detailLoading ? (
            <Stack alignItems="center" justifyContent="center" sx={{ py: 4 }}>
              <CircularProgress />
              <Typography sx={{ mt: 2 }}>詳細情報を読み込み中...</Typography>
            </Stack>
          ) : selectedMachine ? (
            <Stack spacing={2}>
              <Typography variant="subtitle1" fontWeight="bold">
                基本情報
              </Typography>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Stack spacing={1} flex={1}>
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      ID
                    </Typography>
                    <Typography>{selectedMachine.id}</Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      機械名
                    </Typography>
                    <Typography>
                      {selectedMachine.machineName || "未設定"}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      機械タイプ
                    </Typography>
                    <Typography>
                      {selectedMachine.machineType || "未設定"}
                    </Typography>
                  </Box>
                </Stack>

                <Stack spacing={1} flex={1}>
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      メーカーID
                    </Typography>
                    <Typography>
                      {selectedMachine.machineManufacturerId || "未設定"}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      メーカー名
                    </Typography>
                    <Typography>
                      {selectedMachine.machineManufacturerName || "未設定"}
                    </Typography>
                  </Box>
                </Stack>
              </Stack>

              <Divider sx={{ my: 1 }} />

              {/* 詳細仕様情報（APIから取得した追加情報を表示） */}
              <Typography variant="subtitle1" fontWeight="bold">
                詳細仕様
              </Typography>

              {/* ここに詳細情報の表示を追加 */}
              <Typography>
                {selectedMachine.description || "詳細情報はありません"}
              </Typography>

              {/* 編集ボタン */}
              <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() =>
                    router.push(`/basic-spec/${selectedMachine.id}/edit`)
                  }
                >
                  編集する
                </Button>
              </Box>
            </Stack>
          ) : (
            <Typography>データの読み込みに失敗しました</Typography>
          )}
        </Box>
      </Modal>
    </Layout>
  );
}
