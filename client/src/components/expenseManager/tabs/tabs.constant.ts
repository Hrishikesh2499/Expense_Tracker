import {
  EXPENSE,
  EXPENSE_CATEGORY,
  EXPENSE_MANAGER,
  EXPENSE_TYPE,
} from "../../../constants/ui.route.constant";

export const EXPENSE_MANAGER_TABS = {
  dashboard: {
    label: "Dashboard",
    path: "",
  },
  expenseType: {
    label: "Expense Type",
    path: "expense-type",
  },
  expenseCategory: {
    label: "Expense Category",
    path: "expense-category",
  },
  expense: {
    label: "Expense",
    path: "expense",
  },
};

export const TAB_PATH_MAPPING = {
  [`${EXPENSE_MANAGER}${EXPENSE_TYPE}`]: "expenseType",
  [EXPENSE_MANAGER]: "dashboard",
  [`${EXPENSE_MANAGER}${EXPENSE_CATEGORY}`]: "expenseCategory",
  [`${EXPENSE_MANAGER}${EXPENSE}`]: "expense",
};
