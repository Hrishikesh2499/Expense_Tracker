import { Grid, TextField } from "@mui/material";
import { IObject } from "../../../../../utils/utils";
import ErrorBoundary from "../../../../common/error-boundary/errorBoundary";
import Modal from "../../../../common/modal";
import classes from "./createExpenseType.styles";

interface IProps {
  onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  save: () => void;
  close: () => void;
  open: boolean;
  helperText: () => IObject;
  disableSaveButton: boolean;
}

const CreateExpenseType = (props: IProps) => {
  const createExpenseType = () => {
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
              fullWidth
              helperText={props.helperText()["name"]}
              onChange={props.onChange}
              name="name"
              label="Name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              FormHelperTextProps={{ sx: classes.helperText }}
              variant="filled"
              size="medium"
              fullWidth
              onChange={props.onChange}
              helperText={props.helperText()["description"]}
              name="description"
              label="Description"
            />
          </Grid>
        </Grid>
      </ErrorBoundary>
    );
  };

  const modal = () => {
    return (
      <Modal
        title={"Create Expense Type"}
        save={props.save}
        handleClose={props.close}
        open={props.open}
        children={createExpenseType()}
        disableSaveButton={props.disableSaveButton}
      ></Modal>
    );
  };

  return <ErrorBoundary>{modal()}</ErrorBoundary>;
};

export default CreateExpenseType;
