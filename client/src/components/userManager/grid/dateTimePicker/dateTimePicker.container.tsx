import { ICellEditorParams } from "@ag-grid-community/all-modules";
import dayjs from "dayjs";
import { useAppDispatch } from "../../../../rtk/hooks/hooks";
import { updateUserAsync } from "../../../../rtk/thunks/userManager.thunks";
import DateTimePicker from "./dateTimePicker.component";

const DateTimePickerContainer = (props: ICellEditorParams) => {
  const { value, data } = props;
  const date = dayjs(value) as unknown as Date;
  const dispatch = useAppDispatch();
  const onAccept = (value: Date | null) => {
    if (value) {
      dispatch(updateUserAsync({ ...data, expires: value }));
    }
  };
  return <DateTimePicker onAccept={onAccept} date={date} {...props} />;
};

export default DateTimePickerContainer;
