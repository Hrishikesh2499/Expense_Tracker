import { Theme } from "@mui/material";

const expenseTypeStyles = {
  box: {
    display: "flex",
    flexDirection: "column",
    m: (theme: Theme) => theme.spacing(2),
    gap: (theme: Theme) => theme.spacing(2),
  },
};

export default expenseTypeStyles;
