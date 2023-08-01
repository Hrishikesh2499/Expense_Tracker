import { Theme } from "@mui/material";

const labStyles = {
  box: {
    display: "flex",
    flexDirection: "column",
    m: (theme: Theme) => theme.spacing(2),
    gap: (theme: Theme) => theme.spacing(2),
  },
};

export default labStyles;
