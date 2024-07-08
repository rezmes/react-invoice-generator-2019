import { WebPartContext } from "@microsoft/sp-webpart-base";
import { sp, SPRest } from "@pnp/sp/presets/all";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import { IInvoice } from '../models/index'; // Adjust the path as necessary

export class InvoiceService {
  private spRest: SPRest;

  constructor(context: WebPartContext) {
    this.spRest = sp;
    this.spRest.setup({
      spfxContext: context
    });
  }

  /**
   * Fetches invoice items from the "InvoiceList".
   */
  public async getInvoices(): Promise<IInvoice[]> {
    try {
      const items: IInvoice[] = await this.spRest.web.lists.getByTitle("InvoiceList").items.select('ID', 'Title', 'billTo').get();
      return items;
    } catch (error) {
      console.error('Error loading invoices:', error);
      return [];
    }
  }
}
