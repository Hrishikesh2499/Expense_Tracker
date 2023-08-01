import { Box } from "@mui/material";
import HomeTab from "./tab";
import classes from "./home.styles";
import ErrorBoundary from "../common/error-boundary/errorBoundary";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <ErrorBoundary>
      <Box sx={classes.root}>
        <HomeTab />
        <Box sx={{ p: "8px" }}>
          <Outlet />
        </Box>
      </Box>
    </ErrorBoundary>
  );
};

export default Home;
