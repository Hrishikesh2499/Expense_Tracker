import { createSlice } from "@reduxjs/toolkit";
// Define a type for the slice state
interface ISpinnerInitialState {
  spinner:boolean
}

// Define the initial state using that type
const initialState: ISpinnerInitialState = {
  spinner:false
};

export const spinnerSlice = createSlice({
  name: "spinner",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setSpinner: (state, actions) => {
      state.spinner = actions.payload;
    },
  },
});

export const { setSpinner } = spinnerSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export default spinnerSlice.reducer;
