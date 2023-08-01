import { ICellEditorParams } from "@ag-grid-community/all-modules";
import { FormControl, Autocomplete, TextField } from "@mui/material";
import { TUserFields } from "../../../../interfaces/userManager.interface";
import { useAppDispatch } from "../../../../rtk/hooks/hooks";
import { updateUserAsync } from "../../../../rtk/thunks/userManager.thunks";
import ErrorBoundary from "../../error-boundary/errorBoundary";

import classes from "./autoCompleteSelector.styles";
const AutoCompleteSelector = (props: ICellEditorParams) => {
  const dispatch = useAppDispatch();
  const { value, data, colDef } = props;

  const options = ["Yes", "No"];
  const onChange = (value: string) => {
    debugger;
    const booleanValue = value === "Yes" ? true : false;
    switch (colDef.field as TUserFields) {
      case "admin":
        dispatch(updateUserAsync({ ...data, admin: booleanValue }));
        break;

      case "revoked":
        dispatch(updateUserAsync({ ...data, revoked: booleanValue }));
        break;

      case "beta":
        dispatch(updateUserAsync({ ...data, beta: booleanValue }));
        break;

      default:
        break;
    }
  };
  return (
    <ErrorBoundary>
      <FormControl fullWidth sx={classes.root}>
        <Autocomplete
          freeSolo
          disableClearable
          size="small"
          onChange={(_, value) => {
            onChange(value);
          }}
          value={value ? "Yes" : "No"}
          options={options}
          renderInput={(params) => (
            <TextField
              {...params}
              key={params.id}
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
            />
          )}
        />
      </FormControl>
    </ErrorBoundary>
  );
};

export default AutoCompleteSelector;
