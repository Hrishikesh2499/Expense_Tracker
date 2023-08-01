import { Box } from "@mui/material";
import ErrorBoundary from "../../../common/error-boundary/errorBoundary";
import CreateExpenseType from "./createExpenseType";
import classes from "./expenseType.styles";
import ExpenseTypeGrid from "./grid";
import ExpenseTypeUtility from "./utility";

const ExpenseType = () => {
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

export default ExpenseType;
