interface Colors {
  primary: string;
  secondary: string;
  thirdColor: string;
  accent: string;
  black: string;
  white: string;
  gray: string;
  darkGray: string;
  alertColor: string;
  muiPrimary: string;
  backgroundColor: string;
}

const colors: Colors = {
  primary: "#740307", // メインカラー
  secondary: "#550105", // サブカラー
  thirdColor: "#FFA1A4", // サードカラー
  accent: "#0084A5", // アクセントカラー
  black: "#333333", // カラー(黒)
  white: "#FDFDFD", // カラー(白)
  gray: "#BDBDBD", // カラー（薄いグレー）
  darkGray: "#616161", // カラー(濃いグレー)
  alertColor: "#D32F2F", // アラートカラー
  muiPrimary: "#1976D2", // MUIのprimaryカラー
  backgroundColor: "#F5F5F7", // 背景色
};

interface ButtonColors {
  filledButtonColor: string;
  filledTonalButtonColor: string;
  elevatedButtonColor: string;
  outlinedButtonColor: string;
}

const buttonColors: ButtonColors = {
  filledButtonColor: colors.primary, // filled buttonの色
  filledTonalButtonColor: "#FFA1A4", // filled tonal buttonの色
  elevatedButtonColor: "#FFEDEE", // elevated buttonの色
  outlinedButtonColor: colors.primary, // outlined buttonの色
};

interface TooltipColors {
  alertColor: string;
  greenColor: string;
}

const tooltipColors: TooltipColors = {
  alertColor: colors.alertColor, // アラートカラー
  greenColor: "#DCEDC8", // 淡い緑色
};

export { colors, buttonColors, tooltipColors };
