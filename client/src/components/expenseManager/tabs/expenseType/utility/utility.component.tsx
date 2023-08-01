import { Button, Grid, Tooltip } from "@mui/material";
import ErrorBoundary from "../../../../common/error-boundary/errorBoundary";
import AddIcon from "@mui/icons-material/Add";

const CREATE_EXPENSE_TYPE = "Create Expense Type";

interface IProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const ExpenseTypeUtility = (props: IProps) => {
  return (
    <ErrorBoundary>
      <Grid container>
        <Grid item>
          <Tooltip title={CREATE_EXPENSE_TYPE}>
            <Button
              fullWidth
              variant="contained"
              id="createExpenseType"
              onClick={props.onClick}
              startIcon={<AddIcon />}
            >
              Expense Type
            </Button>
          </Tooltip>
        </Grid>
      </Grid>
    </ErrorBoundary>
  );
};

export default ExpenseTypeUtility;
