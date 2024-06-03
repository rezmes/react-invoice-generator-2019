// export interface IInvoiceGeneratorProps {
//   description: string;
// }
export interface IInvoiceGeneratorProps {
  description: string;
  taxRate: number;
  companyName: string;
  companyAddress: string;
  invoiceService: any; // Replace 'any' with the appropriate type
  listId: string;
}