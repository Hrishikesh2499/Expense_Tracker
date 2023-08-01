import { ROOT, EXPENSE_CATEGORY } from "../constants/url.constants";
import { ICreateExpenseCategory, IExpenseCategory } from "../interfaces/expenseCategory.interface";
import { TResponse } from "../interfaces/response.interface";
import { api } from "../utils/api";




export const getAllExpenseCategoriesService = async (): Promise<TResponse> => {
  return await api.get([ROOT, EXPENSE_CATEGORY]).then(async (res: Response) => {
    const response = await res.json();
    return response;
  });
};

export const createExpenseCategoryService = async (
  payload: ICreateExpenseCategory
): Promise<TResponse> => {
  return await api
    .post({ urls: [ROOT, EXPENSE_CATEGORY], data: payload })
    .then(async (res: Response) => {
      const response = await res.json();
      return response;
    });
};

export const updateExpenseCategoryService = async (
  payload: IExpenseCategory
): Promise<TResponse> => {
  return await api
    .put({ urls: [ROOT, EXPENSE_CATEGORY], data: payload })
    .then(async (res: Response) => {
      const response = await res.json();
      return response;
    });
};

export const deleteExpenseCategoryService = async (
  payload: number
): Promise<TResponse> => {
  return await api
    .deleteApi([ROOT, EXPENSE_CATEGORY, payload.toString()])
    .then(async (res: Response) => {
      const response = await res.json();
      return response;
    });
};
