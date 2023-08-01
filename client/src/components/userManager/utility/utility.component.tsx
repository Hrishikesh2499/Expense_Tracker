import { Box, Button, Grid, Tooltip } from "@mui/material";
import { TUtilityDialogTypes } from "../../../rtk/features/userManagerSlice";
import ErrorBoundary from "../../common/error-boundary/errorBoundary";
import { UTILITY_PROP } from "./utility.constant";

interface IProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
const Utility = (props: IProps) => {
  const getUtilityButtons = () => {
    return (
      <Grid container>
        {Object.keys(UTILITY_PROP).map((key) => {
          const { icon, tooltipLabel, buttonTitle } =
            UTILITY_PROP[key as TUtilityDialogTypes];
          return (
            <Grid key={key} item xs={1}>
              <Tooltip title={tooltipLabel}>
                <Button
                  key={key}
                  name={key}
                  variant="contained"
                  onClick={props.onClick}
                  fullWidth
                  startIcon={icon}
                >
                  {buttonTitle}
                </Button>
              </Tooltip>
            </Grid>
          );
        })}
      </Grid>
    );
  };
  return (
    <ErrorBoundary>
      <Box>{getUtilityButtons()}</Box>
    </ErrorBoundary>
  );
};

export default Utility;
