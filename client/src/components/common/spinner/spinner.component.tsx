import { Box, CircularProgress } from "@mui/material";
import classes from "./spinner.styles";
const Spinner = () => {
  return (
    <Box sx={classes.root}>
      <CircularProgress />
    </Box>
  );
};

export default Spinner;
