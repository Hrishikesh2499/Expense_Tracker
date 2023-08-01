import { Box } from "@mui/material";
import ErrorBoundary from "../../../common/error-boundary/errorBoundary";
import classes from "./dashboard.styles";

const Dashboard = () => {
  return (
    <ErrorBoundary>
      <Box sx={classes.box}>Dashboard</Box>
    </ErrorBoundary>
  );
};

export default Dashboard;
