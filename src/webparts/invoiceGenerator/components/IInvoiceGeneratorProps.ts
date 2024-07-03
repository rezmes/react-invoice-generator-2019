import { WebPartContext } from "@microsoft/sp-webpart-base";

export interface IInvoiceGeneratorProps {
  logoImage: string,
  listId: string;
  context: WebPartContext;
  taxRate: number;
  companyName: string;
  companyAddress: string;
  description: string;
}
