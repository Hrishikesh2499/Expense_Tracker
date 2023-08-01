export interface IExpenseType {
  id: number;
  name: string;
  description: string;
}
export type ICreateExpenseType = Pick<IExpenseType, "name" | "description">;
