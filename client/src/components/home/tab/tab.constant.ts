import {
  EXPENSE_MANAGER,
  USER_MANAGER,
} from "../../../constants/ui.route.constant";
import ExpenseManager from "../../expenseManager";
import UserManager from "../../userManager";

export const HOME_TAB = {
  expenseManager: {
    label: "Expense Manager",
    component: ExpenseManager,
    path: EXPENSE_MANAGER,
  },
  userManager: {
    label: "User Manager",
    component: UserManager,
    path: USER_MANAGER,
  },
};

export const PATH_TAB_VALUE_MAPPING = {
  [EXPENSE_MANAGER]: "expenseManager",
  [USER_MANAGER]: "userManager",
};
