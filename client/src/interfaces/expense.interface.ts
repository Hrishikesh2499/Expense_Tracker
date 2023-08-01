export interface IExpense {
  id: number;
  name: string;
  description: string;
}
export type ICreateExpense = Pick<
  IExpense,
  "name" | "description"
>;

export type TCreateExpense = keyof ICreateExpense
