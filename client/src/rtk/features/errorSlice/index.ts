import { createSlice } from "@reduxjs/toolkit";
import { ICreateExpense } from "../../../interfaces/expense.interface";
import { ICreateExpenseCategory } from "../../../interfaces/expenseCategory.interface";
import { ICreateExpenseType } from "../../../interfaces/expenseTypes.interface";
import { ILab } from "../../../interfaces/lab.interface";
import { IObject } from "../../../utils/utils";
import { IAddUserManagerProp } from "../userManagerSlice";
// Define a type for the slice state
export type TErrorTypes = "required";

export type TModules =
  | "addNewUser"
  | "createExpenseType"
  | "createExpenseCategory"
  | "createExpense"
  | "createLab";

export type TAddNewUserError = {
  [key in keyof IAddUserManagerProp]: boolean;
};

export type TCreateExpenseTypeError = {
  [key in keyof ICreateExpenseType]: boolean;
};

export type TCreateExpenseCategoryError = {
  [key in keyof ICreateExpenseCategory]: boolean;
};

export type TCreateExpenseError = {
  [key in keyof ICreateExpense]: boolean;
};

export type TCreateLab = {
  [key in keyof Pick<ILab,"handle">]: boolean;
};

export type TError =
  | TAddNewUserError
  | TCreateExpenseCategoryError
  | TCreateExpenseTypeError
  | TCreateExpenseError
  | TCreateLab
  | object;

export interface IErrorTypes {
  required: TError;
}
export interface IApplicationErrorHandling {
  addNewUser: IErrorTypes;
  createExpenseType: IErrorTypes;
  createExpenseCategory: IErrorTypes;
  createExpense: IErrorTypes;
  createLab: IErrorTypes;
}
export interface ISetErrorActionPayload extends IObject {
  type: TErrorTypes;
  value: TError;
  module: TModules;
}

const DEFAULT_ERROR_TYPE: IErrorTypes = {
  required: {},
};
// Define the initial state using that type
const initialState: IApplicationErrorHandling = {
  addNewUser: DEFAULT_ERROR_TYPE,
  createExpenseCategory: DEFAULT_ERROR_TYPE,
  createExpenseType: DEFAULT_ERROR_TYPE,
  createExpense: DEFAULT_ERROR_TYPE,
  createLab: DEFAULT_ERROR_TYPE,
};

export const applicationErrorHandling = createSlice({
  name: "applicationErrorHandling",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setErrorAction: (state, action) => {
      const { type, value, module } = action.payload as ISetErrorActionPayload;
      const error = state[module][type];
      state[module][type] = { ...error, ...value };
    },
    clearErrorAction: (state) => {
      state = initialState;
    },
  },
});

export const { setErrorAction, clearErrorAction } =
  applicationErrorHandling.actions;

// Other code such as selectors can use the imported `RootState` type

export default applicationErrorHandling.reducer;
