import { Box } from "@mui/material";
import ErrorBoundary from "../../../common/error-boundary/errorBoundary";
import CreateExpense from "./createExpense";
import classes from "./expense.styles";
import ExpenseTypeGrid from "./grid";
import ExpenseTypeUtility from "./utility";

const Expense = () => {
  return (
    <ErrorBoundary>
      <Box sx={classes.box}>
        <ExpenseTypeUtility/>
        <ExpenseTypeGrid />
        <CreateExpense/>
      </Box>
    </ErrorBoundary>
  );
};

export default Expense;
