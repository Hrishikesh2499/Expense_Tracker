import { Grid, TextField } from "@mui/material";
import { IObject } from "../../../../../utils/utils";
import ErrorBoundary from "../../../../common/error-boundary/errorBoundary";
import Modal from "../../../../common/modal";
import classes from "./createExpenseCategory.styles";



interface IProps {
  onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  save: () => void;
  close: () => void;
  open: boolean;
  helperText: () => IObject
  disableSaveButton:boolean
}

const CreateExpenseCategory = (props: IProps) => {
  const createExpenseCategory = () => {
    return (
      <ErrorBoundary>
        <Grid
          container
          display="flex"
          sx={classes.gridContainer}
          spacing={classes.gridContainer.spacing}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <TextField
              variant="filled"
              FormHelperTextProps={{ sx: classes.helperText }}
              size="medium"
              required
              fullWidth
              onChange={props.onChange}
              name="name"
              label="Name"
              helperText={props.helperText()["name"]}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="filled"
              size="medium"
              FormHelperTextProps={{ sx: classes.helperText }}
              fullWidth
              required
              onChange={props.onChange}
              name="description"
              label="Description"
              helperText={props.helperText()["description"]}
            />
          </Grid>
        </Grid>
      </ErrorBoundary>
    );
  };

  const modal = () => {
    return (
      <Modal
        title={"Create Expense Category"}
        save={props.save}
        handleClose={props.close}
        open={props.open}
        disableSaveButton={props.disableSaveButton}
        children={createExpenseCategory()}
      ></Modal>
    );
  };

  return <ErrorBoundary>{modal()}</ErrorBoundary>;
};

export default CreateExpenseCategory;
