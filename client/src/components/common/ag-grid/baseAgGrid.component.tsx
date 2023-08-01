import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { Box } from "@mui/material";
import { ColDef, GridOptions } from "@ag-grid-community/all-modules";

const DEFAULT_COLUMN_DEFINITION = {
  sortable: true,
  filter: true,
};
export interface IProps extends GridOptions {
  height?: number | string;
  width?: number | string;
}

const BaseAgGridComponent = (props: IProps | any) => {
  const { height, width, paginationPageSize, columnDefs, ...restProps } = props;
  const resizableColumns = columnDefs.map((colDef: ColDef) => {
    return { ...colDef, resizable: true };
  });
  return (
    <>
      <Box className="ag-theme-alpine" style={{ height: height, width: width }}>
        <AgGridReact
          defaultColDef={DEFAULT_COLUMN_DEFINITION}
          paginationPageSize={paginationPageSize}
          {...restProps}
          columnDefs={resizableColumns}
        ></AgGridReact>
      </Box>
    </>
  );
};

export default BaseAgGridComponent;
