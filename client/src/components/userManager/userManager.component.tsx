import { Box } from "@mui/material";
import UserGrid from "./grid";
import Utility from "./utility";
import classes from "./userManager.styles";
import UtilityDialog from "./utilityDialog";

const UserManager = () => {
  return (
    <Box sx={classes.root}>
      <Utility />
      <UserGrid />
      <UtilityDialog/>
    </Box>
  );
};

export default UserManager;
