import { Autocomplete, Grid, TextField } from "@mui/material";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { IAddUserManagerProp } from "../../../../rtk/features/userManagerSlice";
import ErrorBoundary from "../../../common/error-boundary/errorBoundary";
import { LABELS, OPTIONS, SIZE } from "./addNewUserDialogContent.constant";
import classes from "./addNewUserDialogContent.styles";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { MobileDateTimePicker } from "@mui/x-date-pickers";
import { TAddNewUserHelperText } from "./addNewUserDialogContent.container";

dayjs.extend(localizedFormat);

interface IProps {
  onChange: (propKey: string, propValue: IPropValue) => void;
  addNewUserProp: IAddUserManagerProp;
  helperText: TAddNewUserHelperText;
}
export type IPropValue = string | boolean | Date | null;

const AddNewUserDialogContent = (props: IProps) => {
  const expires = props.addNewUserProp.expires;
  return (
    <ErrorBoundary>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            name="email"
            type="email"
            required
            value={props.addNewUserProp.email}
            onChange={(e) => {
              props.onChange(e.target.name, e.target.value);
            }}
            fullWidth
            label={LABELS.email}
            size={SIZE}
            helperText={props.helperText["email"]}
          />
        </Grid>
        <Grid item xs={6}>
          <Autocomplete
            size={SIZE}
            onChange={(event, value) => {
              const propValue =
                value === "Yes" ? true : value === "No" ? false : null;
              props.onChange("beta", propValue);
            }}
            renderInput={(params) => (
              <TextField
                required
                {...params}
                helperText={props.helperText["beta"]}
                label={LABELS.beta}
              />
            )}
            options={OPTIONS}
          />
        </Grid>
        <Grid item xs={12}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MobileDateTimePicker
              onChange={(value: Date | null) => {
                props.onChange("expires", value?.toString() || null);
              }}
              value={expires}
              label={LABELS.expires}
              sx={classes.datePicker}
              slotProps={{
                textField: {
                  variant: "filled",
                  helperText: props.helperText["expires"],
                  required: true,
                },
                actionBar: { actions: ["clear", "cancel", "accept"] },
              }}
            />
          </LocalizationProvider>
        </Grid>
      </Grid>
    </ErrorBoundary>
  );
};

export default AddNewUserDialogContent;
