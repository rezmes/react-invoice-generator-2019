import { WebPartContext } from '@microsoft/sp-webpart-base';
import { sp, SPFI, spfi, SPFx } from "@pnp/sp/presets/all";
import { IInvoice } from '../models/IInvoice';

export class InvoiceService {
  private sp: SPFI;

  constructor(context: WebPartContext) {
    this.sp = spfi().using(SPFx(context));
  }

  public async getInvoice(listId: string): Promise<IInvoice[]> {
    try {
      const list = this.sp.web.lists.getById(listId);
      const items = await list.items.select('ID', 'Title', 'billTo')();
      return items;
    } catch (error) {
      console.error('Error loading invoices:', error);
      return [];
    }
  }

  public async createList(listName: string): Promise<any> {
    try {
      const createList = await this.sp.web.lists.add(listName, "List created by Invoice Generator web part");
      const field = await this.sp.web.lists.getByTitle(listName).fields.addText("billTo");
      console.log(`List '${listName}' created with ID '${createList.data.Id}' and field '${field.InternalName}'.`);
      await this.sp.web.lists.getByTitle(listName).defaultView.fields.add("billTo");
      return createList.data.Id;
    } catch (error) {
      console.log("Error creating list or field:", error);
      return null;
    }
  }

  public async getLists(): Promise<IListInfo[]> {
    try {
      const lists = await this.sp.web.lists.select("Id", "Title")();
      return lists;
    } catch (error) {
      console.log(`Error retrieving lists: ${error}`);
      return [];
    }
  }

  public async listExists(listName: string): Promise<boolean> {
    try {
      const lists = await this.sp.web.lists.filter(`Title eq '${listName}'`)();
      return lists.length > 0;
    } catch (error) {
      console.error('Error checking if list exists:', error);
      return false;
    }
  }
}
