import { ColDef, ValueFormatterParams } from "@ag-grid-community/all-modules";
import moment from "moment";
import { TUserFields } from "../../../interfaces/userManager.interface";
import { valueFormatterForBooleanValue } from "../../../utils/utils";
import AutoCompleteSelector from "../../common/ag-grid/customDropDown";
import Actions from "./actions";
import DateTimePicker from "./dateTimePicker";

const valueFormatter = (params: ValueFormatterParams) =>
  valueFormatterForBooleanValue(params.value);

const dateTimeStampFormatter = (params: ValueFormatterParams) =>
  moment(params.value).format(HUMAN_READABLE_FORMAT_DATE_TIMESTAMP);

const editable = true;

export const HUMAN_READABLE_FORMAT_DATE_TIMESTAMP = "MMMM Do YYYY, h:mm:ss a";
export type TUserFieldsWithHeadername = {
  [key in TUserFields]: ColDef;
};
export const USER_FIELDS_WITH_HEADERNAME: TUserFieldsWithHeadername = {
  id: { headerName: "ID" },
  admin: {
    headerName: "Admin",
    valueFormatter,
    editable,
    cellEditor: AutoCompleteSelector,
  },
  authcode: { headerName: "Auth Code" },
  email: { headerName: "Email", editable },
  expires: {
    headerName: "Expiry Time",
    editable,
    cellEditor: DateTimePicker,
    valueFormatter: dateTimeStampFormatter,
  },
  revoked: {
    headerName: "Revoked",
    valueFormatter,
    editable,
    cellEditor: AutoCompleteSelector,
  },
  beta: {
    headerName: "Beta",
    valueFormatter,
    editable,
    cellEditor: AutoCompleteSelector,
  },
  actions: { headerName: "Actions", cellRenderer: Actions },
};
export const TOOLTIP_HIDE_DELAY_TIME = 2000;
export const TOOLTIP_SHOW_DELAY_TIME = 0;
export const PAGINATION_PROPERTY = true;
export const PAGINATION_PAGE_SIZE = 20;
