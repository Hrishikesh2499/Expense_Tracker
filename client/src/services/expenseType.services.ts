import { SPRING_BOOT_ROOT, EXPENSE_TYPE } from "../constants/url.constants";
import {
  ICreateExpenseType,
  IExpenseType,
} from "../interfaces/expenseTypes.interface";
import { TResponse } from "../interfaces/response.interface";
import { api } from "../utils/api";

export const getAllExpenseTypesService = async (): Promise<TResponse> => {
  return await api
    .get([SPRING_BOOT_ROOT, EXPENSE_TYPE])
    .then(async (res: Response) => {
      const response = await res.json();
      return response;
    });
};

export const createExpenseTypeService = async (
  payload: ICreateExpenseType
): Promise<TResponse> => {
  return await api
    .post({ urls: [SPRING_BOOT_ROOT, EXPENSE_TYPE], data: payload })
    .then(async (res: Response) => {
      const response = await res.json();
      return response;
    });
};

export const updateExpenseTypeService = async (
  payload: IExpenseType
): Promise<TResponse> => {
  return await api
    .put({ urls: [SPRING_BOOT_ROOT, EXPENSE_TYPE], data: payload })
    .then(async (res: Response) => {
      const response = await res.json();
      return response;
    });
};

export const deleteExpenseTypeService = async (
  payload: number
): Promise<TResponse> => {
  return await api
    .deleteApi([SPRING_BOOT_ROOT, EXPENSE_TYPE, payload.toString()])
    .then(async (res: Response) => {
      const response = await res.json();
      return response;
    });
};
