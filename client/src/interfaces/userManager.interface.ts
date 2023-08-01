export type TUserFields =
  | "id"
  | "admin"
  | "authcode"
  | "email"
  | "expires"
  | "revoked"
  | "beta"|"actions";

export type IUser = {
  [key in TUserFields]: string | number;
};
