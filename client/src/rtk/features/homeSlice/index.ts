import { createSlice } from "@reduxjs/toolkit";
import { TTabType } from "../../../components/home/tab/tab.interface";

// Define a type for the slice state
interface IHomeInitialState {
  status: string;
  error?: string;
  tabType: TTabType;
}

// Define the initial state using that type
const initialState: IHomeInitialState = {
  status: "idle",
  error: undefined,
  tabType: "userManager",
};

export const homeSlice = createSlice({
  name: "home",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setTabTypeAction: (state, action) => {
      state.tabType = action.payload;
    },
  },
});

export const { setTabTypeAction } = homeSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export default homeSlice.reducer;
