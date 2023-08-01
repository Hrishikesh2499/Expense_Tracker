import { ColDef, ValueSetterParams } from "@ag-grid-community/all-modules";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../../rtk/hooks/hooks";
import { getAllExpenseCategoriesAsync, updateExpenseCategoryAsync } from "../../../../../rtk/thunks/expenseCategory.thunks";
import Actions from "./actions";
import ExpenseCategory from "./grid.component";

const GridContainer = () => {
  const dispatch = useAppDispatch();
  const { expenseCategories } = useAppSelector((state) => state.expenseManager);
  const { spinner } = useAppSelector((state) => state.spinner);

  useEffect(() => {
    dispatch(getAllExpenseCategoriesAsync());
  }, [dispatch]);
  const valueSetter = (params: ValueSetterParams) => {
    const { colDef, data, newValue } = params;
    if (colDef.field) {
      const payload = { ...data, [colDef.field]: newValue };
      dispatch(updateExpenseCategoryAsync(payload));
    }

    return true;
  };
  const colDefs: Array<ColDef> = [
    {
      headerName: "ID",
      field: "id",
    },
    {
      headerName: "Expense Category",
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
    <ExpenseCategory
      colDefs={colDefs}
      rowData={expenseCategories}
      spinner={spinner}
    />
  );
};

export default GridContainer;
