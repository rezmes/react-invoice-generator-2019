// export interface IInvoiceGeneratorState {
//     selectedInvoiceIndex: string;
//     invoices: IInvoice[];
//     showAddItemForm: boolean;
//     itemDescription: string;
//     quantity: number;
//     price: number;
//     invoiceItems: IInvoiceItem[];
//     selectedItem: IInvoiceItem | null;
//     issueDate: string;
//     dueDate: string;
//     taxRate: number;
//     companyName: string;
//     companyAddress: string;
//   }
import { IInvoice } from '../models/IInvoice';
import { IInvoiceItem } from '../models/IInvoiceItem';

export interface IInvoiceGeneratorState {
  invoices: IInvoice[];
  invoiceItems: IInvoiceItem[];
  selectedItem: IInvoiceItem | null;
}