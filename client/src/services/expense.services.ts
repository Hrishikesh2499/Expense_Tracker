import { ROOT, EXPENSE } from "../constants/url.constants";
import { ICreateExpense, IExpense } from "../interfaces/expense.interface";
import { TResponse } from "../interfaces/response.interface";
import { api } from "../utils/api";




export const getAllExpensesService = async (): Promise<TResponse> => {
  return await api.get([ROOT, EXPENSE]).then(async (res: Response) => {
    const response = await res.json();
    return response;
  });
};

export const createExpenseService = async (
  payload: ICreateExpense
): Promise<TResponse> => {
  return await api
    .post({ urls: [ROOT, EXPENSE], data: payload })
    .then(async (res: Response) => {
      const response = await res.json();
      return response;
    });
};

export const updateExpenseService = async (
  payload: IExpense
): Promise<TResponse> => {
  return await api
    .put({ urls: [ROOT, EXPENSE], data: payload })
    .then(async (res: Response) => {
      const response = await res.json();
      return response;
    });
};

export const deleteExpenseService = async (
  payload: number
): Promise<TResponse> => {
  return await api
    .deleteApi([ROOT, EXPENSE, payload.toString()])
    .then(async (res: Response) => {
      const response = await res.json();
      return response;
    });
};
