import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  ICreateExpense,
  IExpense
} from "../../interfaces/expense.interface";
import { TResponse } from "../../interfaces/response.interface";
import {
  createExpenseService,
  deleteExpenseService,
  getAllExpensesService,
  updateExpenseService,
} from "../../services/expense.services";
import { closeDialogAction, setExpensesAction } from "../features/expenseManagerSlice";
import { openSnackBar } from "../features/snackBarSlice";
import { setSpinner } from "../features/spinnerSlice";

const getAllExpensesAsync = createAsyncThunk<TResponse>(
  "expenseManager/getAllExpenses",
  // Declare the type your function argument here:
  async (_, { dispatch }) => {
    dispatch(setSpinner(true));
    const response = await getAllExpensesService();
    if (response.status === 200) {
      dispatch(setExpensesAction(response.data || []));
      dispatch(openSnackBar({ message: response.message, variant: "success" }));
      dispatch(setSpinner(false));
      return response;
    }
    dispatch(setSpinner(false));
    dispatch(openSnackBar({ message: response.message, variant: "error" }));
    return response;
  }
);

const createExpenseAsync = createAsyncThunk<TResponse, ICreateExpense>(
  "expenseManager/createExpense",
  // Declare the type your function argument here:
  async (payload, { dispatch }) => {
    const type="createExpense"
    dispatch(setSpinner(true));
    const response = await createExpenseService(payload);
    if (response.status === 200) {
      dispatch(setExpensesAction(response.data || []));
      dispatch(openSnackBar({ message: response.message, variant: "success" }));
      dispatch(closeDialogAction({type}))
      dispatch(setSpinner(false));
      return response;
    }
    dispatch(setSpinner(false));
    dispatch(openSnackBar({ message: response.message, variant: "error" }));
    return response;
  }
);

const updateExpenseAsync = createAsyncThunk<TResponse, IExpense>(
  "expenseManager/updateExpense",
  // Declare the type your function argument here:
  async (payload, { dispatch }) => {
    dispatch(setSpinner(true));
    const response = await updateExpenseService(payload);
    if (response.status === 200) {
      dispatch(setExpensesAction(response.data || []));
      dispatch(openSnackBar({ message: response.message, variant: "success" }));
      dispatch(setSpinner(false));
      return response;
    }
    dispatch(setSpinner(false));
    dispatch(openSnackBar({ message: response.message, variant: "error" }));
    return response;
  }
);

const deleteExpenseAsync = createAsyncThunk<TResponse, number>(
  "expenseManager/deleteExpense",
  // Declare the type your function argument here:
  async (payload, { dispatch }) => {
    dispatch(setSpinner(true));
    const response = await deleteExpenseService(payload);
    if (response.status === 200) {
      dispatch(setExpensesAction(response.data || []));
      dispatch(openSnackBar({ message: response.message, variant: "success" }));
      dispatch(setSpinner(false));
      return response;
    }
    dispatch(setSpinner(false));
    dispatch(openSnackBar({ message: response.message, variant: "error" }));
    return response;
  }
);
export {
  getAllExpensesAsync,
  createExpenseAsync,
  updateExpenseAsync,
  deleteExpenseAsync
};
