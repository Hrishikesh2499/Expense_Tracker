import ExpenseManager from "../components/expenseManager";
import Dashboard from "../components/expenseManager/tabs/dashboard";
import Expense from "../components/expenseManager/tabs/expense";
import ExpenseCategory from "../components/expenseManager/tabs/expenseCategory";
import ExpenseType from "../components/expenseManager/tabs/expenseType";
import Home from "../components/home";
import Lab from "../components/lab";
import Register from "../components/register";
import UserManager from "../components/userManager";
import {
  EXPENSE,
  EXPENSE_CATEGORY,
  EXPENSE_MANAGER,
  EXPENSE_TYPE,
  HOME,
  REGISTER,
  USER_MANAGER,
} from "./ui.route.constant";

export const ROUTE_COMPONENT = {
  register: {
    component: Register,
    path: REGISTER,
  },
  lab:{
    component: Lab,
    path:"/lab"
  },

  home: {
    component: Home,
    path: HOME,
    children: {
      userManager: {
        component: UserManager,
        path: USER_MANAGER,
      },
      expenseManager: {
        component: ExpenseManager,
        path: EXPENSE_MANAGER,
        children: {
          dashboard: { component: Dashboard, path: EXPENSE_MANAGER },
          expenseType: {
            component: ExpenseType,
            path: `${EXPENSE_MANAGER}${EXPENSE_TYPE}`,
          },
          expenseCategory: {
            component: ExpenseCategory,
            path: `${EXPENSE_MANAGER}${EXPENSE_CATEGORY}`,
          },
          expense: {
            component: Expense,
            path: `${EXPENSE_MANAGER}${EXPENSE}`,
          },
        },
      },
    },
  },
};
