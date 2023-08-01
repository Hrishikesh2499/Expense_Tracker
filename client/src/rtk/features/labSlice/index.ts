import { createSlice } from "@reduxjs/toolkit";
import {
  ILab,
  IOption,
  IType,
  IVariant,
  IVendor,
  TLab,
} from "../../../interfaces/lab.interface";

export type TOpenDialog = "createLab" | "editLab";
type TLabAllProp = string & String & IVendor & IType & IOption[] & IVariant;
interface ILabState {
  openDialog?: TOpenDialog;
  lab: ILab;
  labs: ILab[];
}
const DEFAULT_LAB: ILab = {
  handle: "",
};

// Define the initial state using that type
const initialState: ILabState = {
  lab: DEFAULT_LAB,
  labs: [],
};

export const LabSlice = createSlice({
  name: "Lab",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setOpenDialogAction: (state, action) => {
      state.openDialog = action.payload;
    },
    setLabsAction: (state, action) => {
      state.labs = action.payload;
    },
    setLabAction: (state, action) => {
      state.lab = action.payload;
    },
    updateLabAction: (state, action) => {
      const { name, value } = action.payload;
      const { lab } = state;
      const keys = name.split(".");
      keys.reduce((lab: ILab, key: string, index: number) => {
        const typeKey = key as TLab;
        if (index === keys.length - 1) {
          lab[typeKey] = value;
        } else if (!lab[typeKey]) {
          lab[typeKey] = {} as TLabAllProp;
        }
        return lab[typeKey];
      }, lab);

      // state.lab[key as TLab] = value;
    },
    clearLabAction: (state) => {
      state.lab = DEFAULT_LAB;
    },
    closeDialogAction: (state) => {
      state.openDialog = undefined;
      state.lab = DEFAULT_LAB;
    },
  },
});

export const {
  setOpenDialogAction,
  clearLabAction,
  setLabAction,
  setLabsAction,
  updateLabAction,
  closeDialogAction,
} = LabSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export default LabSlice.reducer;
