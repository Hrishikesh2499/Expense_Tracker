import { Box } from "@mui/material";
import ErrorBoundary from "../../../common/error-boundary/errorBoundary";
import CreateExpenseType from "./createExpenseCategory";
import classes from "./expenseCategory.styles";
import ExpenseTypeGrid from "./grid";
import ExpenseTypeUtility from "./utility";

const ExpenseCategory = () => {
  return (
    <ErrorBoundary>
      <Box sx={classes.box}>
        <ExpenseTypeUtility/>
        <ExpenseTypeGrid />
        <CreateExpenseType/>
      </Box>
    </ErrorBoundary>
  );
};

export default ExpenseCategory;
