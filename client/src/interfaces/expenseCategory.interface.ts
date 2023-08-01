export interface IExpenseCategory {
  id: number;
  name: string;
  description: string;
}
export type ICreateExpenseCategory = Pick<
  IExpenseCategory,
  "name" | "description"
>;

export type TCreateExpenseCategory = keyof ICreateExpenseCategory
