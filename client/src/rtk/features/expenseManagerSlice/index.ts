import { createSlice } from "@reduxjs/toolkit";
import { TExpenseManagerTabs } from "../../../components/expenseManager/tabs/tabs.component";
import {
  ICreateExpense,
  IExpense,
} from "../../../interfaces/expense.interface";
import {
  ICreateExpenseCategory,
  IExpenseCategory,
} from "../../../interfaces/expenseCategory.interface";
import {
  ICreateExpenseType,
  IExpenseType,
} from "../../../interfaces/expenseTypes.interface";

const DEFAULT_CREATE_EXPENSE_TYPE: ICreateExpenseType = {
  name: "",
  description: "",
};
const DEFAULT_CREATE_EXPENSE_CATEGORY: ICreateExpenseCategory = {
  name: "",
  description: "",
};
const DEFAULT_CREATE_EXPENSE: ICreateExpense = {
  name: "",
  description: "",
};

export type TOpenDialog =
  | "createExpenseType"
  | "createExpenseCategory"
  | "createExpense";
export type TCreateExpenseType = "name" | "description";
export type TCreateExpenseCategory = "name" | "description";

interface IExpenseManagerState {
  tab: TExpenseManagerTabs;
  expenseTypes: Array<IExpenseType>;
  expenseCategories: Array<IExpenseCategory>;
  expenses: Array<IExpense>;
  openDialog?: TOpenDialog;
  createExpenseType: ICreateExpenseType;
  createExpenseCategory: ICreateExpenseCategory;
  createExpense: ICreateExpense;
}
export interface ISetCreateExpenseType {
  name: string;
  value: string;
}

// Define the initial state using that type
const initialState: IExpenseManagerState = {
  tab: "dashboard",
  expenseTypes: [],
  expenseCategories: [],
  expenses: [],
  createExpenseType: DEFAULT_CREATE_EXPENSE_TYPE,
  createExpenseCategory: DEFAULT_CREATE_EXPENSE_CATEGORY,
  createExpense: DEFAULT_CREATE_EXPENSE,
};

export const ExpenseManagerSlice = createSlice({
  name: "UserManager",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setTabAction: (state, action) => {
      state.tab = action.payload;
    },
    setExpenseTypeAction: (state, action) => {
      state.expenseTypes = action.payload;
    },
    setExpensesAction: (state, action) => {
      state.expenseTypes = action.payload;
    },
    setExpenseCategoryAction: (state, action) => {
      state.expenseCategories = action.payload;
    },
    setOpenDialogAction: (state, action) => {
      state.openDialog = action.payload;
    },
    setCreateExpenseTypeAction: (state, action) => {
      const { name, value } = action.payload;
      state.createExpenseType[name as TCreateExpenseType] = value;
    },
    setCreateExpenseCategoryAction: (state, action) => {
      const { name, value } = action.payload;
      state.createExpenseCategory[name as TCreateExpenseCategory] = value;
    },
    setCreateExpenseAction: (state, action) => {
      const { name, value } = action.payload;
      state.createExpenseCategory[name as TCreateExpenseCategory] = value;
    },
    closeDialogAction: (state, action) => {
      const { type } = action.payload;

      switch (type as TOpenDialog) {
        case "createExpenseType":
          state.openDialog = undefined;
          state.createExpenseType = initialState.createExpenseType;
          break;

        case "createExpenseCategory":
          state.openDialog = undefined;
          state.createExpenseType = initialState.createExpenseCategory;
          break;
        case "createExpense":
          state.openDialog = undefined;
          state.createExpense = initialState.createExpense;
          break;
        default:
          break;
      }
    },
    clearExpenseManagerAction: (state) => {
      state = initialState;
    },
  },
});

export const {
  setExpenseTypeAction,
  setOpenDialogAction,
  setTabAction,
  closeDialogAction,
  setCreateExpenseTypeAction,
  clearExpenseManagerAction,
  setCreateExpenseCategoryAction,
  setExpenseCategoryAction,
  setExpensesAction,
  setCreateExpenseAction,
} = ExpenseManagerSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export default ExpenseManagerSlice.reducer;
