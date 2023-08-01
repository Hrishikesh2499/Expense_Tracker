export type TUserPropKey =
  | "userName"
  | "firstName"
  | "lastName"
  | "contactNumber"
  | "email";
export type TUserPropValues = string | number;
export type IUser = {
  [key in TUserPropKey]: TUserPropValues;
};
