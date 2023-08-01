import { TGetAllUsers } from "../interfaces/response.interface";
import { api } from "../utils/api";
import { SPRING_BOOT_ROOT, USERS } from "../constants/url.constants";
import {
  IAddUserManagerProp,
  IDeleteUserPayload,
} from "../rtk/features/userManagerSlice";

export const getUserManagerService = async (): Promise<TGetAllUsers> => {
  return await api.get([SPRING_BOOT_ROOT, USERS]).then(async (res: Response) => {
    const response = await res.json();
    return { ...response, status: res.status };
  });
};

export const updateUserService = async (
  payload: any
): Promise<TGetAllUsers> => {
  return await api
    .put({ urls: [SPRING_BOOT_ROOT, USERS], data: payload })
    .then(async (res) => {
      const response = await res.json();
      return { ...response, status: res.status };
    });
};

export const addUserservice = async (
  payload: IAddUserManagerProp
): Promise<TGetAllUsers> => {
  return await api
    .post({ urls: [SPRING_BOOT_ROOT, USERS], data: payload })
    .then(async (res) => {
      const response = await res.json();
      return { ...response, status: res.status };
    });
};

export const deleteUserService = async (
  payload: IDeleteUserPayload
): Promise<TGetAllUsers> => {
  return await api
    .deleteApi([SPRING_BOOT_ROOT, USERS, `?id=${payload.id}`])
    .then(async (res) => {
      const response = await res.json();
      return { ...response, status: res.status };
    });
};
