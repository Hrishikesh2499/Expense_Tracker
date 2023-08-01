import { Button, Grid, Tooltip } from "@mui/material";
import ErrorBoundary from "../../../../common/error-boundary/errorBoundary";
import AddIcon from "@mui/icons-material/Add";

const CREATE_EXPENSE_CATEGORY = "Create Expense Category";

interface IProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const ExpenseUtility = (props: IProps) => {
  return (
    <ErrorBoundary>
      <Grid container>
        <Grid item>
          <Tooltip title={CREATE_EXPENSE_CATEGORY}>
            <Button
              fullWidth
              variant="contained"
              id="createExpense"
              onClick={props.onClick}
              startIcon={<AddIcon />}
            >
              Expense
            </Button>
          </Tooltip>
        </Grid>
      </Grid>
    </ErrorBoundary>
  );
};

export default ExpenseUtility;
