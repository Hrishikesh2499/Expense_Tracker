import { createAsyncThunk } from "@reduxjs/toolkit";
import { batch } from "react-redux";
import { ILab } from "../../interfaces/lab.interface";
import { TResponse } from "../../interfaces/response.interface";
import {
  createLabService,
  deleteLabService,
  getAllLabsService,
  updateLabService,
} from "../../services/lab.services";
import { closeDialogAction } from "../features/labSlice";
import { setLabsAction } from "../features/labSlice";
import { openSnackBar } from "../features/snackBarSlice";
import { setSpinner } from "../features/spinnerSlice";

const getAllLabsAsync = createAsyncThunk<TResponse>(
  "lab/fetchAllLab",
  // Declare the type your function argument here:
  async (_, { dispatch }) => {
    dispatch(setSpinner(true));
    const response = await getAllLabsService();
    if (response.status === 200) {
      dispatch(setLabsAction(response.data || []));
      dispatch(openSnackBar({ message: response.message, variant: "success" }));
      dispatch(setSpinner(false));
      return response;
    }
    dispatch(setSpinner(false));
    dispatch(openSnackBar({ message: response.message, variant: "error" }));
    return response;
  }
);

const createLabAsync = createAsyncThunk<TResponse, ILab>(
  "lab/createLab",
  // Declare the type your function argument here:
  async (payload, { dispatch }) => {
    dispatch(setSpinner(true));
    const response = await createLabService(payload);
    if (response.status === 200) {
      batch(() => {
        dispatch(setLabsAction(response.data || []));
        dispatch(
          openSnackBar({ message: response.message, variant: "success" })
        );
        dispatch(closeDialogAction());
        dispatch(setSpinner(false));
      });
      return response;
    }
    dispatch(setSpinner(false));
    dispatch(openSnackBar({ message: response.message, variant: "error" }));
    return response;
  }
);

const updateLabAsync = createAsyncThunk<TResponse, ILab>(
  "lab/updateLab",
  // Declare the type your function argument here:
  async (payload, { dispatch }) => {
    dispatch(setSpinner(true));
    const response = await updateLabService(payload);
    if (response.status === 200) {
      batch(() => {
        dispatch(setLabsAction(response.data || []));
        dispatch(closeDialogAction());
        dispatch(
          openSnackBar({ message: response.message, variant: "success" })
        );
        dispatch(setSpinner(false));
      });

      return response;
    }
    dispatch(setSpinner(false));
    dispatch(openSnackBar({ message: response.message, variant: "error" }));
    return response;
  }
);

const deleteLabAsync = createAsyncThunk<TResponse, number>(
  "lab/deleteLab",
  // Declare the type your function argument here:
  async (payload, { dispatch }) => {
    dispatch(setSpinner(true));
    const response = await deleteLabService(payload);
    if (response.status === 200) {
      dispatch(setLabsAction(response.data || []));
      dispatch(openSnackBar({ message: response.message, variant: "success" }));
      dispatch(setSpinner(false));
      return response;
    }
    dispatch(setSpinner(false));
    dispatch(openSnackBar({ message: response.message, variant: "error" }));
    return response;
  }
);
export { getAllLabsAsync, createLabAsync, updateLabAsync, deleteLabAsync };
