import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  ICreateExpenseCategory,
  IExpenseCategory
} from "../../interfaces/expenseCategory.interface";
import { TResponse } from "../../interfaces/response.interface";
import {
  createExpenseCategoryService,
  deleteExpenseCategoryService,
  getAllExpenseCategoriesService,
  updateExpenseCategoryService,
} from "../../services/expenseCategory.services";
import { closeDialogAction, setExpenseCategoryAction } from "../features/expenseManagerSlice";
import { openSnackBar } from "../features/snackBarSlice";
import { setSpinner } from "../features/spinnerSlice";

const getAllExpenseCategoriesAsync = createAsyncThunk<TResponse>(
  "expenseManager/getAllExpenseCategories",
  // Declare the type your function argument here:
  async (_, { dispatch }) => {
    dispatch(setSpinner(true));
    const response = await getAllExpenseCategoriesService();
    if (response.status === 200) {
      dispatch(setExpenseCategoryAction(response.data || []));
      dispatch(openSnackBar({ message: response.message, variant: "success" }));
      dispatch(setSpinner(false));
      return response;
    }
    dispatch(setSpinner(false));
    dispatch(openSnackBar({ message: response.message, variant: "error" }));
    return response;
  }
);

const createExpenseCategoryAsync = createAsyncThunk<TResponse, ICreateExpenseCategory>(
  "expenseManager/createExpenseCategory",
  // Declare the type your function argument here:
  async (payload, { dispatch }) => {
    const type="createExpenseCategory"
    dispatch(setSpinner(true));
    const response = await createExpenseCategoryService(payload);
    if (response.status === 200) {
      dispatch(setExpenseCategoryAction(response.data || []));
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

const updateExpenseCategoryAsync = createAsyncThunk<TResponse, IExpenseCategory>(
  "expenseManager/updateExpenseCategory",
  // Declare the type your function argument here:
  async (payload, { dispatch }) => {
    dispatch(setSpinner(true));
    const response = await updateExpenseCategoryService(payload);
    if (response.status === 200) {
      dispatch(setExpenseCategoryAction(response.data || []));
      dispatch(openSnackBar({ message: response.message, variant: "success" }));
      dispatch(setSpinner(false));
      return response;
    }
    dispatch(setSpinner(false));
    dispatch(openSnackBar({ message: response.message, variant: "error" }));
    return response;
  }
);

const deleteExpenseCategoryAsync = createAsyncThunk<TResponse, number>(
  "expenseManager/deleteExpenseCategory",
  // Declare the type your function argument here:
  async (payload, { dispatch }) => {
    dispatch(setSpinner(true));
    const response = await deleteExpenseCategoryService(payload);
    if (response.status === 200) {
      dispatch(setExpenseCategoryAction(response.data || []));
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
  getAllExpenseCategoriesAsync,
  createExpenseCategoryAsync,
  updateExpenseCategoryAsync,
  deleteExpenseCategoryAsync
};
