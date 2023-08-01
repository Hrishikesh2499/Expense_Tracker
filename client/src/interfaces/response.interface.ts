import { IUser } from "./userManager.interface";

export type TResponse = {
  data: any;
  message: string;
  status: number;
};

export type ErrorResponse = {
  message: string;
  description: string;
};

export type TGetAllUsers = {
  users: Array<IUser>;
  message: string;
  status: number;
};
