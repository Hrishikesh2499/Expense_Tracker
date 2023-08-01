import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  ICreateExpenseType,
  IExpenseType,
} from "../../interfaces/expenseTypes.interface";
import { TResponse } from "../../interfaces/response.interface";
import {
  createExpenseTypeService,
  deleteExpenseTypeService,
  getAllExpenseTypesService,
  updateExpenseTypeService,
} from "../../services/expenseType.services";
import { setExpenseTypeAction } from "../features/expenseManagerSlice";
import { openSnackBar } from "../features/snackBarSlice";
import { setSpinner } from "../features/spinnerSlice";

const getAllExpenseTypesAsync = createAsyncThunk<TResponse>(
  "expenseManager/getAllExpenseTypes",
  // Declare the type your function argument here:
  async (_, { dispatch }) => {
    dispatch(setSpinner(true));
    const response = await getAllExpenseTypesService();
    if (response.status === 200) {
      dispatch(setExpenseTypeAction(response.data || []));
      dispatch(openSnackBar({ message: response.message, variant: "success" }));
      dispatch(setSpinner(false));
      return response;
    }
    dispatch(setSpinner(false));
    dispatch(openSnackBar({ message: response.message, variant: "error" }));
    return response;
  }
);

const createExpenseTypeAsync = createAsyncThunk<TResponse, ICreateExpenseType>(
  "expenseManager/createExpenseType",
  // Declare the type your function argument here:
  async (payload, { dispatch }) => {
    dispatch(setSpinner(true));
    const response = await createExpenseTypeService(payload);
    if (response.status === 200) {
      dispatch(setExpenseTypeAction(response.data || []));
      dispatch(openSnackBar({ message: response.message, variant: "success" }));
      dispatch(setSpinner(false));
      return response;
    }
    dispatch(setSpinner(false));
    dispatch(openSnackBar({ message: response.message, variant: "error" }));
    return response;
  }
);

const updateExpenseTypeAsync = createAsyncThunk<TResponse, IExpenseType>(
  "expenseManager/updateExpenseType",
  // Declare the type your function argument here:
  async (payload, { dispatch }) => {
    dispatch(setSpinner(true));
    const response = await updateExpenseTypeService(payload);
    if (response.status === 200) {
      dispatch(setExpenseTypeAction(response.data || []));
      dispatch(openSnackBar({ message: response.message, variant: "success" }));
      dispatch(setSpinner(false));
      return response;
    }
    dispatch(setSpinner(false));
    dispatch(openSnackBar({ message: response.message, variant: "error" }));
    return response;
  }
);

const deleteExpenseTypeAsync = createAsyncThunk<TResponse, number>(
  "expenseManager/deleteExpenseType",
  // Declare the type your function argument here:
  async (payload, { dispatch }) => {
    dispatch(setSpinner(true));
    const response = await deleteExpenseTypeService(payload);
    if (response.status === 200) {
      dispatch(setExpenseTypeAction(response.data || []));
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
  getAllExpenseTypesAsync,
  createExpenseTypeAsync,
  updateExpenseTypeAsync,
  deleteExpenseTypeAsync
};
