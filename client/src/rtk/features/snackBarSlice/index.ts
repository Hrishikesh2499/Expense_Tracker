import { createSlice } from "@reduxjs/toolkit";
import { VariantType } from "notistack";
// Define a type for the slice state
interface ISnackBarInitialState {
  snackBar: { message: string; variant: VariantType };
}

// Define the initial state using that type
const initialState: ISnackBarInitialState = {
  snackBar: { message: "", variant: "success" },
};

export const snackBarSlice = createSlice({
  name: "snackBar",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    openSnackBar: (state, actions) => {
      state.snackBar = actions.payload;
    },
    clearSnackBar:(state)=>{
      state.snackBar=initialState.snackBar
    }
  },
});

export const { openSnackBar,clearSnackBar } = snackBarSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export default snackBarSlice.reducer;
