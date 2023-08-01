import { ColDef, ValueSetterParams } from "@ag-grid-community/all-modules";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../../rtk/hooks/hooks";
import {
  getAllExpenseTypesAsync,
  updateExpenseTypeAsync,
} from "../../../../../rtk/thunks/expenseType.thunks";
import Actions from "./actions";
import ExpenseTypeGrid from "./grid.component";

const GridContainer = () => {
  const dispatch = useAppDispatch();
  const { expenseTypes } = useAppSelector((state) => state.expenseManager);
  const { spinner } = useAppSelector((state) => state.spinner);

  useEffect(() => {
    dispatch(getAllExpenseTypesAsync());
  }, [dispatch]);
  const valueSetter = (params: ValueSetterParams) => {
    const { colDef, data, newValue } = params;
    if (colDef.field) {
      const payload = { ...data, [colDef.field]: newValue };
      dispatch(updateExpenseTypeAsync(payload));
    }

    return true;
  };
  const colDefs: Array<ColDef> = [
    {
      headerName: "ID",
      field: "id",
    },
    {
      headerName: "Expense Type",
      field: "name",
      editable: true,
      valueSetter: valueSetter,
    },
    {
      headerName: "Description",
      field: "description",
      editable: true,
      valueSetter: valueSetter,
    },
    {
      headerName: "Actions",
      field: "actions",
      cellRenderer: Actions,
    },
  ];
  return (
    <ExpenseTypeGrid colDefs={colDefs} rowData={expenseTypes} spinner={spinner} />
  );
};

export default GridContainer;
