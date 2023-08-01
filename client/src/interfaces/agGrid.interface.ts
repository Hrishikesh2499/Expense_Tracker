import { AgGridReactProps, AgReactUiProps } from "ag-grid-react";

export interface TAgGridProp extends AgGridReactProps, AgReactUiProps {
  height?: string | number;
  width?: number | string;
}
