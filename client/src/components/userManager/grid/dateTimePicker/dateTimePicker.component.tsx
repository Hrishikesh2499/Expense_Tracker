import { ICellEditorParams } from "@ag-grid-community/all-modules";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker";
import ErrorBoundary from "../../../common/error-boundary/errorBoundary";
import { Box } from "@mui/material";
import classes from "./dateTimePicker.styles";

interface IProps extends ICellEditorParams {
  onAccept: (value: Date | null) => void;
  date: Date | null;
}
const DateTimePicker = (props: IProps) => {
  return (
    <ErrorBoundary>
      <Box display="flex" alignItems="center">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MobileDateTimePicker
            onAccept={props.onAccept}
            value={props.date}
            sx={classes.root}
            slotProps={{
              actionBar: { actions: ["clear", "cancel", "accept"] },
            }}
          />
        </LocalizationProvider>
      </Box>
    </ErrorBoundary>
  );
};

export default DateTimePicker;
