import { Box } from "@mui/material";
import ErrorBoundary from "../common/error-boundary/errorBoundary";
import CreateLab from "./createLab";
import LabGrid from "./grid";
import classes from "./lab.styles";
import LabUtility from "./utility";
const Lab = () => {
  return (
    <ErrorBoundary>
      <Box sx={classes.box}>
        <LabUtility />
        <LabGrid />
        <CreateLab />
      </Box>
    </ErrorBoundary>
  );
};

export default Lab;
