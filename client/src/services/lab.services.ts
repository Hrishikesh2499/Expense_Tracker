import { NODE_BASE, LAB } from "../constants/url.constants";
import { ILab } from "../interfaces/lab.interface";
import { TResponse } from "../interfaces/response.interface";
import { api } from "../utils/api";

export const getAllLabsService = async (): Promise<TResponse> => {
  return await api.get([NODE_BASE, LAB]).then(async (res: Response) => {
    const response = await res.json();
    return response;
  });
};

export const createLabService = async (payload: ILab): Promise<TResponse> => {
  return await api
    .post({ urls: [NODE_BASE, LAB], data: payload })
    .then(async (res: Response) => {
      const response = await res.json();
      return response;
    });
};

export const updateLabService = async (payload: ILab): Promise<TResponse> => {
  return await api
    .put({ urls: [NODE_BASE, LAB], data: payload })
    .then(async (res: Response) => {
      const response = await res.json();
      return response;
    });
};

export const deleteLabService = async (payload: number): Promise<TResponse> => {
  console.log(payload)
  return await api
    .deleteApi([NODE_BASE, LAB, payload.toString()])
    .then(async (res: Response) => {
      const response = await res.json();
      return response;
    });
};
