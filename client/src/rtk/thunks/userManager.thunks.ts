import { createAsyncThunk } from "@reduxjs/toolkit";
import { TGetAllUsers } from "../../interfaces/response.interface";
import {
  addUserservice,
  deleteUserService,
  getUserManagerService,
  updateUserService,
} from "../../services/userManager.service";
import { openSnackBar } from "../features/snackBarSlice";
import { setSpinner } from "../features/spinnerSlice";
import {
  IAddUserManagerProp,
  IDeleteUserPayload,
  setUsersDataAction,
} from "../features/userManagerSlice";

const fetchAllUsersAsync = createAsyncThunk<TGetAllUsers>(
  "users/fetchAllUsers",
  // Declare the type your function argument here:
  async (_, { dispatch }) => {
    dispatch(setSpinner(true));
    const response = await getUserManagerService();
    if (response.status === 200) {
      dispatch(setUsersDataAction(response.users || []));
      dispatch(openSnackBar({ message: response.message, variant: "success" }));
      dispatch(setSpinner(false));
      return response;
    }
    dispatch(setSpinner(false));
    dispatch(openSnackBar({ message: response.message, variant: "error" }));
    return response;
  }
);

const updateUserAsync = createAsyncThunk<TGetAllUsers, any>(
  "users/updateUsers",
  // Declare the type your function argument here:
  async (data, { dispatch }) => {
    dispatch(setSpinner(true));
    const response = await updateUserService(data);
    if (response.status === 200) {
      dispatch(setUsersDataAction(response.users || []));
      dispatch(openSnackBar({ message: response.message, variant: "success" }));
      dispatch(setSpinner(false));
      return response;
    }
    dispatch(setSpinner(false));
    dispatch(openSnackBar({ message: response.message, variant: "error" }));
    return response;
  }
);

const addUserAsync = createAsyncThunk<TGetAllUsers, IAddUserManagerProp>(
  "users/addUser",
  // Declare the type your function argument here:
  async (data, { dispatch }) => {
    dispatch(setSpinner(true));
    const response = await addUserservice(data);
    if (response.status === 200) {
      dispatch(setUsersDataAction(response.users || []));
      dispatch(openSnackBar({ message: response.message, variant: "success" }));
      dispatch(setSpinner(false));
      return response;
    }
    dispatch(setSpinner(false));
    dispatch(openSnackBar({ message: response.message, variant: "error" }));
    return response;
  }
);

const deleteUserAsync = createAsyncThunk<null, IDeleteUserPayload>(
  "users/addUser",
  // Declare the type your function argument here:
  async (data, { dispatch }) => {
    try {
      dispatch(setSpinner(true));
      const response = await deleteUserService(data);
      if (response.status === 200) {
        dispatch(setUsersDataAction(response.users || []));
        dispatch(
          openSnackBar({ message: response.message, variant: "success" })
        );
        dispatch(setSpinner(false));
      }
      dispatch(setSpinner(false));
      // dispatch(openSnackBar({ message: response.message, variant: "error" }));
      return null;
    } catch (error) {
      return null;
    }
  }
);
export { updateUserAsync, fetchAllUsersAsync, addUserAsync, deleteUserAsync };
