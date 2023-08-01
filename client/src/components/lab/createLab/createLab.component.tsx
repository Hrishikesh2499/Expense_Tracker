import { Divider, Grid, TextField } from "@mui/material";
import { ILab } from "../../../interfaces/lab.interface";
import { IObject } from "../../../utils/utils";
import ErrorBoundary from "../../common/error-boundary/errorBoundary";
import Modal from "../../common/modal";
import classes from "./createLab.styles";

interface IProps {
  onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  save: () => void;
  close: () => void;
  open: boolean;
  helperText: () => IObject;
  title: string;
  disableSaveButton: boolean;
  lab: ILab;
}
const displayDivider = () => {
  return (
    <Grid item xs={12}>
      <Divider />
    </Grid>
  );
};
const CreateLab = (props: IProps) => {
  const { handle, body, imgSrc, title, type, variant, vendor } = props.lab;

  const labProperties = () => {
    return (
      <ErrorBoundary>
        <Grid
          container
          display="flex"
          sx={classes.gridContainer}
          spacing={classes.gridContainer.spacing}
          alignItems="center"
        >
          <Grid item xs={6}>
            <TextField
              variant="filled"
              size="medium"
              required
              fullWidth
              value={handle || ""}
              onChange={props.onChange}
              name="handle"
              label="Handle"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              variant="filled"
              size="medium"
              fullWidth
              value={title || ""}
              onChange={props.onChange}
              name="title"
              label="Title"
            />
          </Grid>
          <Grid item xs={8}>
            <TextField
              variant="filled"
              size="medium"
              fullWidth
              value={body || ""}
              minRows={6}
              multiline
              onChange={props.onChange}
              name="body"
              label="Body"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="filled"
              size="medium"
              fullWidth
              value={imgSrc || ""}
              onChange={props.onChange}
              name="imgSrc"
              label="Image Source"
            />
          </Grid>
          {displayDivider()}
          <Grid item xs={8}>
            <TextField
              variant="filled"
              size="medium"
              fullWidth
              value={vendor?.name || ""}
              onChange={props.onChange}
              name="vendor.name"
              label="Vendor"
            />
          </Grid>
          {displayDivider()}
          <Grid item xs={6}>
            <TextField
              variant="filled"
              size="medium"
              fullWidth
              value={type?.name || ""}
              onChange={props.onChange}
              name="type.name"
              label="Type"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              variant="filled"
              size="medium"
              fullWidth
              value={type?.tags || ""}
              onChange={props.onChange}
              name="type.tags"
              label="Tags"
            />
          </Grid>
          {displayDivider()}
          <Grid item xs={4}>
            <TextField
              variant="filled"
              size="medium"
              fullWidth
              value={variant?.sku || ""}
              onChange={props.onChange}
              name="variant.sku"
              label="Variant SKU"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              variant="filled"
              size="medium"
              fullWidth
              type="number"
              value={variant?.grams || ""}
              onChange={props.onChange}
              name="variant.grams"
              label="Grams"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              variant="filled"
              size="medium"
              fullWidth
              value={variant?.inventoryTracker || ""}
              onChange={props.onChange}
              name="variant.inventoryTracker"
              label="Inventory Tracker"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              variant="filled"
              size="medium"
              fullWidth
              type="number"
              value={variant?.quantity || ""}
              onChange={props.onChange}
              name="variant.quantity"
              label="Quantity"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              variant="filled"
              size="medium"
              fullWidth
              value={variant?.policy || ""}
              onChange={props.onChange}
              name="variant.policy"
              label="Policy"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              variant="filled"
              size="medium"
              fullWidth
              value={variant?.ffmService || ""}
              onChange={props.onChange}
              name="variant.ffmService"
              label="FFM Service"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              variant="filled"
              size="medium"
              fullWidth
              type="number"
              value={variant?.price || ""}
              onChange={props.onChange}
              name="variant.price"
              label="Price"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              variant="filled"
              size="medium"
              fullWidth
              onChange={props.onChange}
              name="variant.compareAtPrice"
              value={variant?.compareAtPrice || ""}
              label="Compare At Price"
            />
          </Grid>
        </Grid>
      </ErrorBoundary>
    );
  };

  const modal = () => {
    return (
      <Modal
        title={props.title}
        save={props.save}
        handleClose={props.close}
        open={props.open}
        disableSaveButton={props.disableSaveButton}
        children={labProperties()}
        fullScreen
      ></Modal>
    );
  };

  return <ErrorBoundary>{modal()}</ErrorBoundary>;
};

export default CreateLab;
