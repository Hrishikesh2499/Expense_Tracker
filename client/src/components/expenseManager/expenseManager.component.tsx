import { Outlet } from "react-router-dom";
import ErrorBoundary from "../common/error-boundary/errorBoundary";
import ExpenseManangerTabs from "./tabs";

const ExpenseManager = () => {
  return (
    <ErrorBoundary>
      <ExpenseManangerTabs />
      <Outlet/>
    </ErrorBoundary>
  );
};

export default ExpenseManager;
