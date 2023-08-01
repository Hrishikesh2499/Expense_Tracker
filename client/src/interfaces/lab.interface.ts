export interface ILab {
  handle: string;
  title?: String;
  body?: String;
  vendor?: IVendor;
  type?: IType;
  options?: IOption[];
  variant?: IVariant;
  imgSrc?: String;
}

export type TLab =
  | "handle"
  | "title"
  | "body"
  | "vendor"
  | "type"
  | "options"
  | "variant"
  | "imgSrc";

export interface IType {
  name: string;
  tags: string;
}

export interface IOption {}

export interface IVariant {
  sku: string;
  grams?: number;
  inventoryTracker?: string;
  quantity?: number;
  policy?: string;
  ffmService?: string;
  price?: number;
  compareAtPrice?: string;
}

export interface IVendor {
  name: string;
}
