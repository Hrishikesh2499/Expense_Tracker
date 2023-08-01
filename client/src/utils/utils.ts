import { GridReadyEvent } from "@ag-grid-community/all-modules";
import {
  ISetErrorActionPayload,
  TError,
  TErrorTypes,
  TModules,
} from "../rtk/features/errorSlice";

export const valueFormatterForBooleanValue = (value: boolean) => {
  return value ? "Yes" : "No";
};
export type THasValueUtility = any;
export const hasValue = (value: any) => {
  switch (typeof value) {
    case "boolean":
      return value !== null;

    case "string":
      return value.length > 0;

    case "number":
      return !!value;

    case "object":
      if (Array.isArray(value)) return value.length > 0;
      return !!value;
    default:
      return true;
  }
};

export const onGridReady = (event: GridReadyEvent) => {
  event.api.sizeColumnsToFit();
};

export const capitalizeFirstLetter = (value: string) => {
  if (value) return `${value[0].toUpperCase()}${value.slice(1)}`;
};

export const isDisabled = (obj: TError) => {
  return (
    Object.keys(obj).filter((key) => obj[key as keyof TError] === true)
      .length !== Object.keys(obj).length
  );
};

export interface IObject {
  [index: string]: any;
}

export const createErrorPayload = (
  obj: IObject,
  type: TErrorTypes,
  module: TModules
) => {
  if (obj) {
    const errorObject = {} as ISetErrorActionPayload;
    Object?.keys(obj)?.forEach((key) => {
      const propKey = key as keyof IObject;
      const value = obj[propKey];
      errorObject[propKey] = hasValue(value);
    });
    return { module, type, value: errorObject };
  }
  return {};
};

export const createHelperTextObject = (required: TError) => {
  if (required) {
    const helpTextObj = {} as IObject;
    Object.keys(required).forEach((key) => {
      const propKey = key as keyof IObject;
      helpTextObj[propKey] = required[propKey as keyof TError]
        ? ""
        : `${capitalizeFirstLetter(propKey as string)} Is Required.`;
    });
    return helpTextObj;
  }
  return {};
};
