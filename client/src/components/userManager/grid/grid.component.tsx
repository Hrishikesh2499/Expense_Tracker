import { ColDef } from "@ag-grid-community/all-modules";
import { Box } from "@mui/material";
import BaseAgGrid from "../../common/ag-grid";
import ErrorBoundary from "../../common/error-boundary/errorBoundary";
import Spinner from "../../common/spinner/spinner.component";
import {
  TOOLTIP_SHOW_DELAY_TIME,
  TOOLTIP_HIDE_DELAY_TIME,
  PAGINATION_PAGE_SIZE,
  PAGINATION_PROPERTY,
} from "./grid.constant";
import classes from "./grid.styles";
interface IProps {
  colDefs: ColDef[];
  rowData: Array<any>;
  spinner: boolean;
}
const UserGrid = (props: IProps) => {
  const displaySpinnerOrGrid = () => {
    return props.spinner ? <Spinner /> : getGrid();
  };
  const getGrid = () => {
    return (
      <BaseAgGrid
        columnDefs={props.colDefs}
        rowData={props.rowData}
        height={classes.grid.height}
        width={classes.grid.width}
        onGridReady={(event) => {
          event.api.sizeColumnsToFit();
        }}
        paginationPageSize={PAGINATION_PAGE_SIZE}
        pagination={PAGINATION_PROPERTY}
        tooltipShowDelay={TOOLTIP_SHOW_DELAY_TIME}
        tooltipHideDelay={TOOLTIP_HIDE_DELAY_TIME}
      />
    );
  };
  
  return (
    <ErrorBoundary>
      <Box sx={classes.root} display="flex">
        {displaySpinnerOrGrid()}
      </Box>
    </ErrorBoundary>
  );
};

export default UserGrid;
