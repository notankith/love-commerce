import { Customer } from "../customer/Customer";

export type Order = {
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  orderDate: Date | null;
  products?: Array<"Option1">;
  totalAmount: number | null;
  updatedAt: Date;
};
