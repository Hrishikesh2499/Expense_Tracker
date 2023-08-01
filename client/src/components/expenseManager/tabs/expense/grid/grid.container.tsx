import { ColDef, ValueSetterParams } from "@ag-grid-community/all-modules";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../../rtk/hooks/hooks";
import {
  getAllExpensesAsync,
  updateExpenseAsync,
} from "../../../../../rtk/thunks/expense.thunks";
import Actions from "./actions";
import Expense from "./grid.component";

const GridContainer = () => {
  const dispatch = useAppDispatch();
  const { expenses } = useAppSelector((state) => state.expenseManager);
  const { spinner } = useAppSelector((state) => state.spinner);

  useEffect(() => {
    dispatch(getAllExpensesAsync());
  }, [dispatch]);
  const valueSetter = (params: ValueSetterParams) => {
    const { colDef, data, newValue } = params;
    if (colDef.field) {
      const payload = { ...data, [colDef.field]: newValue };
      dispatch(updateExpenseAsync(payload));
    }

    return true;
  };
  const colDefs: Array<ColDef> = [
    {
      headerName: "Expense Amount",
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
      headerName: "Expense Type",
      field: "description",
      editable: true,
      valueSetter: valueSetter,
    },
    {
      headerName: "Expense Category",
      field: "description",
      editable: true,
      valueSetter: valueSetter,
    },
    {
      headerName: "Date",
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
  return <Expense colDefs={colDefs} rowData={expenses} spinner={spinner} />;
};

export default GridContainer;
