import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../../interfaces/userManager.interface";

// Define a type for the slice state
const UTILITY_DIALOG_TITLE = "Add New User";
export type TUtilityDialogTypes = "userManager";
export type TUtilityDialog = {
  userManager: {
    title: string;
  };
};
export type KeyTypeAddNewUserProp = Exclude<keyof IAddUserManagerProp, null>;
export interface IAddUserManagerProp {
  beta: boolean | null;
  expires: Date | null;
  email: string;
}
export interface IDeleteUserPayload {
  id: number | string;
}
export type TAddUserManagerPropKey = "beta" | "expires" | "email";
export interface IAddUserManagerActionPayload {
  propKey: TAddUserManagerPropKey;
  propValue: string | boolean;
}

const DEFAULT_UTILITY_DIALOG: TUtilityDialog = {
  userManager: {
    title: UTILITY_DIALOG_TITLE,
  },
};
const DEFAULT_ADD_NEW_USER_PROP: IAddUserManagerProp = {
  beta: null,
  email: "",
  expires: null,
};
interface IUserManagerInitialState {
  users: Array<IUser>;
  status: string;
  error?: string;
  utilityDialog: TUtilityDialog;
  openUtilityDialog?: TUtilityDialogTypes;
  addNewUserProp: IAddUserManagerProp;
}

// Define the initial state using that type
const initialState: IUserManagerInitialState = {
  users: [],
  status: "idle",
  error: undefined,
  utilityDialog: DEFAULT_UTILITY_DIALOG,
  openUtilityDialog: undefined,
  addNewUserProp: DEFAULT_ADD_NEW_USER_PROP,
};

export const UserManagerSlice = createSlice({
  name: "UserManager",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    getUserManagerAction: (state) => {},
    setUserManagerAction: (_, action) => {
      return action.payload;
    },
    setOpenUtilityDialogAction: (state, action) => {
      state.openUtilityDialog = action.payload;
    },
    setAddNewUserProp: (state, action) => {
      const { propKey, propValue } =
        action.payload as IAddUserManagerActionPayload;
      state.addNewUserProp[propKey] = propValue as never;
    },
    clearAddNewUserPropAction: (state) => {
      state.addNewUserProp = DEFAULT_ADD_NEW_USER_PROP;
    },
    setUsersDataAction: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const {
  getUserManagerAction,
  setUserManagerAction,
  setOpenUtilityDialogAction,
  setAddNewUserProp,
  clearAddNewUserPropAction,
  setUsersDataAction,
} = UserManagerSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export default UserManagerSlice.reducer;
