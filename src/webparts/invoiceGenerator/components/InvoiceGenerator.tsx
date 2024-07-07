// import * as React from 'react';
// import styles from './InvoiceGenerator.module.scss';
// import { InvoiceService } from '../services/InvoiceService';
// import { IInvoiceItem, IInvoice } from '../models/index';
// import { IInvoiceGeneratorProps } from './IInvoiceGeneratorProps';
// import { InvoiceHeader } from './InvoiceHeader/InvoiceHeader';
// import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';
// import { MessageBar } from 'office-ui-fabric-react/lib/MessageBar';
// import  InvoiceSummary  from './InvoiceSummary/InvoiceSummary';
// import { Icon } from 'office-ui-fabric-react/lib/Icon';
// import { InvoiceItemRow } from './InvoiceItemRow/InvoiceItemRow';
// import * as strings from 'InvoiceGeneratorWebPartStrings';
// import { Placeholder } from "@pnp/spfx-controls-react/lib/Placeholder";
// import { Customizer } from "office-ui-fabric-react/lib/Utilities";

// const Plus = (): JSX.Element => <Icon iconName="CirclePlus" />;

// interface IInvoiceGeneratorState {
//   invoices: IInvoice[];
//   selectedInvoiceIndex: string;
//   invoiceItems: IInvoiceItem[];
//   selectedItem: IInvoiceItem;
//   itemDescription: string;
//   quantity: number;
//   price: number;
//   showAddItemForm: boolean;
//   issueDate: Date;
//   dueDate: Date;
// }

// export class InvoiceGenerator extends React.Component<IInvoiceGeneratorProps, IInvoiceGeneratorState> {
//   constructor(props: IInvoiceGeneratorProps) {
//     super(props);
//     this.state = {
//       invoices: [],
//       selectedInvoiceIndex: '0',
//       invoiceItems: [],
//       selectedItem: null,
//       itemDescription: '',
//       quantity: 0,
//       price: 0,
//       showAddItemForm: false,
//       issueDate: new Date(),
//       dueDate: new Date()
//     };
//   }

//   public componentDidMount(): void {
//     this.loadInvoices();
//   }

//   private loadInvoices(): void {
//     const invoiceService = new InvoiceService(this.props.context);
//     invoiceService.getInvoice(this.props.listId)
//       .then((data: IInvoice[]) => {
//         this.setState({ invoices: data });
//       })
//       .catch((error) => {
//         console.error('Error loading invoices:', error);
//       });
//   }

//   private calculateSubtotal(): number {
//     const subtotal = this.state.invoiceItems.reduce((acc, cur) => acc + cur.totalAmount, 0);
//     return subtotal;
//   }

//   private calculateTax(): number {
//     const subtotal = this.calculateSubtotal();
//     const taxAmount = (subtotal * this.props.taxRate) / 100;
//     return taxAmount;
//   }

//   private calculateTotal(): number {
//     const subtotal = this.calculateSubtotal();
//     const taxAmount = this.calculateTax();
//     const total = subtotal + taxAmount;

//     if (isNaN(total)) {
//       return 0;
//     }

//     return total;
//   }

//   private onItemSelected = (item: IInvoiceItem): void => {
//     this.setState({
//       selectedItem: item,
//       itemDescription: item.description,
//       quantity: item.quantity,
//       price: item.price
//     });
//   }

//   private toggleAddItemForm = (): void => {
//     this.setState(prevState => ({ showAddItemForm: !prevState.showAddItemForm }));
//   }

//   private handleDeleteItem = (): void => {
//     if (!this.state.selectedItem) {
//       console.error('No item selected for deletion');
//       return;
//     }

//     try {
//       const updatedItems = this.state.invoiceItems.filter((item) => item !== this.state.selectedItem);
//       this.setState({
//         invoiceItems: updatedItems,
//         selectedItem: null,
//         itemDescription: '',
//         quantity: 0,
//         price: 0
//       });
//     } catch (error) {
//       console.error('Error deleting item:', error);
//     }
//   }

//   private handleAddItem = (): void => {
//     const { itemDescription, quantity, price } = this.state;
//     if (!itemDescription || quantity === 0 || price === 0) {
//       return;
//     }

//     const newInvoiceItem: IInvoiceItem = {
//       description: itemDescription,
//       id: this.state.invoiceItems.length + 1,
//       quantity,
//       price,
//       totalAmount: quantity * price,
//     };

//     this.setState(prevState => ({
//       invoiceItems: [...prevState.invoiceItems, newInvoiceItem],
//       itemDescription: '',
//       quantity: 0,
//       price: 0,
//       showAddItemForm: false
//     }));
//   }

//   private onIssueDateChange = (date: Date): void => {
//     this.setState({ issueDate: date });
//   }

//   private onDueDateChange = (date: Date): void => {
//     this.setState({ dueDate: date });
//   }

//   public render(): JSX.Element {
//     const { context, listId, taxRate, companyAddress, companyName, logoImage } = this.props;
//     const { invoices, selectedInvoiceIndex, invoiceItems, showAddItemForm, itemDescription, quantity, price, issueDate, dueDate } = this.state;

//     return (
//       <Customizer>
//         <div className={styles.invoiceGenerator}>
//           {(!invoices || invoices.length === 0 || !listId) && (
//             <Placeholder
//               iconName="Edit"
//               iconText="Configure your web part"
//               description="Please configure the web part properties."
//               buttonLabel="Configure"
//               onConfigure={() => {
//                 context.propertyPane.open();
//               }}

//             />
//           )}
//           {invoices && invoices.length > 0 && (
//             <div>
//               <div className={styles.invoiceSelect}>
//                 <label style={{ marginRight: '8px', fontWeight: 700 }}>{strings.selectInvoicesLabel}</label>
//                 <Dropdown
//                   options={invoices.map((invoice, index) => ({
//                     key: index.toString(),
//                     text: `${strings.invoiceText} ${invoice.ID} - ${invoice.Title}`,
//                   }))}
//                   selectedKey={selectedInvoiceIndex}
//                   onChanged={(option) => this.setState({ selectedInvoiceIndex: option.key.toString() })}
//                 />
//               </div>
//               <div className={styles.header}>
//                 <img className={styles.companyLogo} src={logoImage} alt={strings.companyLogoAlt} height="100" width="100" />
//                 <div className={styles.title}>{strings.invoiceTitle}</div>
//               </div>

//               <InvoiceHeader
//                 invoiceNumber={invoices[Number(selectedInvoiceIndex)]?.ID}
//                 customerName={invoices[Number(selectedInvoiceIndex)]?.Title}
//                 customerAddress={invoices[Number(selectedInvoiceIndex)]?.billTo}
//                 companyAddress={companyAddress}
//                 companyName={companyName}
//                 amountdue={this.calculateTotal()}
//                 issueDate={issueDate}
//                 dueDate={dueDate}
//                 onIssueDateChange={this.onIssueDateChange}
//                 onDueDateChange={this.onDueDateChange}
//               />
// <div className={styles.itemsContainer}>
//                 <div className={styles.itemsTable}>
//                   <div className={styles.itemsTableHeader}>
//                     <div className={styles.itemDescription}>{strings.itemDescriptionText}</div>
//                     <div className={styles.itemQuantity}>{strings.quantityText}</div>
//                     <div className={styles.itemPrice}>{strings.priceText}</div>
//                     <div className={styles.itemTotal}>{strings.totalText}</div>
//                   </div>
//                   {showAddItemForm && (
//                     <div className={styles.addItem}>
//                       <div className={styles.inputWrapper}>
//                         <input
//                           type="text"
//                           placeholder={strings.itemDescriptionPlaceholder}
//                           value={itemDescription}
//                           onChange={(e) => this.setState({ itemDescription: e.target.value })}
//                         />
//                       </div>
//                       <div className={styles.inputWrapper}>
//                         <input
//                           type="number"
//                           placeholder={strings.quantityPlaceholder}
//                           value={quantity}
//                           onChange={(e) => this.setState({ quantity: parseInt(e.target.value) })}
//                         />
//                       </div>
//                       <div className={styles.inputWrapper}>
//                         <input
//                           type="number"
//                           placeholder={strings.pricePlaceholder}
//                           value={price}
//                           onChange={(e) => this.setState({ price: parseFloat(e.target.value) })}
//                         />
//                       </div>
//                       <div onClick={this.handleAddItem} className={styles.submitButton}>{strings.submitButtonText}</div>
//                     </div>
//                   )}
//                   {invoiceItems.map((item) => (
//                     <InvoiceItemRow
//                       key={item.id}
//                       item={item}
//                       isSelected={item === this.state.selectedItem}
//                       onItemSelected={this.onItemSelected}
//                       onDeleteItem={this.handleDeleteItem}
//                     />
//                   ))}
//                   <div className={styles.fullWidthPlusButton} onClick={this.toggleAddItemForm}>
//                     <Plus />{strings.addItemButtonText}
//                   </div>
//                   {invoiceItems.length === 0 && showAddItemForm && (
//                     <MessageBar>
//                       Please add items to the invoice before generating a PDF.
//                     </MessageBar>
//                   )}
//                   <div className={styles.itemsTableFooter}>
//                     <InvoiceSummary subtotal={this.calculateSubtotal()} taxRate={taxRate} />
//                       {/* total={this.calculateTotal()} /> */}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </Customizer>
//     );
//   }
// }

import * as React from 'react';
import styles from './InvoiceGenerator.module.scss';
import { InvoiceService } from '../services/InvoiceService';
import { IInvoiceItem, IInvoice } from '../models/index';
import { IInvoiceGeneratorProps } from './IInvoiceGeneratorProps';
import { InvoiceHeader } from './InvoiceHeader/InvoiceHeader';
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';
import { MessageBar } from 'office-ui-fabric-react/lib/MessageBar';
import InvoiceSummary from './InvoiceSummary/InvoiceSummary';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { InvoiceItemRow } from './InvoiceItemRow/InvoiceItemRow';
import * as strings from 'InvoiceGeneratorWebPartStrings';
import { Placeholder } from "@pnp/spfx-controls-react/lib/Placeholder";
import { Customizer } from "office-ui-fabric-react/lib/Utilities";

const Plus = (): JSX.Element => <Icon iconName="CirclePlus" />;

interface IInvoiceGeneratorState {
  invoices: IInvoice[];
  selectedInvoiceIndex: string;
  invoiceItems: IInvoiceItem[];
  selectedItem: IInvoiceItem;
  itemDescription: string;
  quantity: number;
  price: number;
  showAddItemForm: boolean;
  issueDate: Date;
  dueDate: Date;
}

export class InvoiceGenerator extends React.Component<IInvoiceGeneratorProps, IInvoiceGeneratorState> {
  constructor(props: IInvoiceGeneratorProps) {
    super(props);
    this.state = {
      invoices: [],
      selectedInvoiceIndex: '0',
      invoiceItems: [],
      selectedItem: null,
      itemDescription: '',
      quantity: 0,
      price: 0,
      showAddItemForm: false,
      issueDate: new Date(),
      dueDate: new Date()
    };
  }

  public componentDidMount(): void {
    this.loadInvoices();
  }

  private loadInvoices(): void {
    const invoiceService = new InvoiceService(this.props.context);
    invoiceService.getInvoice(this.props.listId)
      .then((data: IInvoice[]) => {
        this.setState({ invoices: data });
      })
      .catch((error) => {
        console.error('Error loading invoices:', error);
      });
  }

  private calculateSubtotal(): number {
    const subtotal = this.state.invoiceItems.reduce((acc, cur) => acc + cur.totalAmount, 0);
    return subtotal;
  }

  private calculateTax(): number {
    const subtotal = this.calculateSubtotal();
    const taxAmount = (subtotal * this.props.taxRate) / 100;
    return taxAmount;
  }

  private calculateTotal(): number {
    const subtotal = this.calculateSubtotal();
    const taxAmount = this.calculateTax();
    const total = subtotal + taxAmount;

    if (isNaN(total)) {
      return 0;
    }

    return total;
  }

  private onItemSelected = (item: IInvoiceItem): void => {
    this.setState({
      selectedItem: item,
      itemDescription: item.description,
      quantity: item.quantity,
      price: item.price
    });
  }

  private toggleAddItemForm = (): void => {
    this.setState(prevState => ({ showAddItemForm: !prevState.showAddItemForm }));
  }

  private handleDeleteItem = (): void => {
    if (!this.state.selectedItem) {
      console.error('No item selected for deletion');
      return;
    }

    try {
      const updatedItems = this.state.invoiceItems.filter((item) => item !== this.state.selectedItem);
      this.setState({
        invoiceItems: updatedItems,
        selectedItem: null,
        itemDescription: '',
        quantity: 0,
        price: 0
      });
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  }

  private handleAddItem = (): void => {
    const { itemDescription, quantity, price } = this.state;
    if (!itemDescription || quantity === 0 || price === 0) {
      return;
    }

    const newInvoiceItem: IInvoiceItem = {
      description: itemDescription,
      id: this.state.invoiceItems.length + 1,
      quantity,
      price,
      totalAmount: quantity * price,
    };

    this.setState(prevState => ({
      invoiceItems: [...prevState.invoiceItems, newInvoiceItem],
      itemDescription: '',
      quantity: 0,
      price: 0,
      showAddItemForm: false
    }));
  }

  private onIssueDateChange = (date: Date): void => {
    this.setState({ issueDate: date });
  }

  private onDueDateChange = (date: Date): void => {
    this.setState({ dueDate: date });
  }

  public render(): JSX.Element {
    const { context, listId, taxRate, companyAddress, companyName, logoImage } = this.props;
    const { invoices, selectedInvoiceIndex, invoiceItems, showAddItemForm, itemDescription, quantity, price, issueDate, dueDate } = this.state;

    return (
      <Customizer>
        <div className={styles.invoiceGenerator}>
          {(!invoices || invoices.length === 0 || !listId) && (
            <Placeholder
              iconName="Edit"
              iconText="Configure your web part"
              description="Please configure the web part properties."
              buttonLabel="Configure"
              onConfigure={() => {
                context.propertyPane.open();
              }}
            />
          )}
          {invoices && invoices.length > 0 && (
            <div>
              <div className={styles.invoiceSelect}>
                <label style={{ marginRight: '8px', fontWeight: 700 }}>{strings.selectInvoicesLabel}</label>
                <Dropdown
                  options={invoices.map((invoice, index) => ({
                    key: index.toString(),
                    text: `${strings.invoiceText} ${invoice.ID} - ${invoice.Title}`,
                  }))}
                  selectedKey={selectedInvoiceIndex}
                  onChanged={(option) => this.setState({ selectedInvoiceIndex: option.key.toString() })}
                />
              </div>
              <div className={styles.header}>
                <img className={styles.companyLogo} src={logoImage} alt={strings.companyLogoAlt} height="100" width="100" />
                <div className={styles.title}>{strings.invoiceTitle}</div>
              </div>

              <InvoiceHeader
                invoiceNumber={invoices[Number(selectedInvoiceIndex)]?.ID}
                customerName={invoices[Number(selectedInvoiceIndex)]?.Title}
                customerAddress={invoices[Number(selectedInvoiceIndex)]?.billTo}
                companyAddress={companyAddress}
                companyName={companyName}
                amountdue={this.calculateTotal()}
                issueDate={issueDate}
                dueDate={dueDate}
                onIssueDateChange={this.onIssueDateChange}
                onDueDateChange={this.onDueDateChange}
              />
              <div className={styles.itemsContainer}>
                <div className={styles.itemsTable}>
                  <div className={styles.itemsTableHeader}>
                    <div className={styles.itemDescription}>{strings.itemDescriptionText}</div>
                    <div className={styles.itemQuantity}>{strings.quantityText}</div>
                    <div className={styles.itemPrice}>{strings.priceText}</div>
                    <div className={styles.itemTotal}>{strings.totalText}</div>
                  </div>
                  {showAddItemForm && (
                    <div className={styles.addItem}>
                      <div className={styles.inputWrapper}>
                        <input
                          type="text"
                          placeholder={strings.itemDescriptionPlaceholder}
                          value={itemDescription}
                          onChange={(e) => this.setState({ itemDescription: e.target.value })}
                        />
                      </div>
                      <div className={styles.inputWrapper}>
                        <input
                          type="number"
                          placeholder={strings.quantityPlaceholder}
                          value={quantity}
                          onChange={(e) => this.setState({ quantity: parseInt(e.target.value) })}
                        />
                      </div>
                      <div className={styles.inputWrapper}>
                        <input
                          type="number"
                          placeholder={strings.pricePlaceholder}
                          value={price}
                          onChange={(e) => this.setState({ price: parseFloat(e.target.value) })}
                        />
                      </div>
                      <div onClick={this.handleAddItem} className={styles.submitButton}>{strings.submitButtonText}</div>
                    </div>
                  )}
                  {invoiceItems.map((item) => (
                    <InvoiceItemRow
                      key={item.id}
                      item={item}
                      isSelected={item === this.state.selectedItem}
                      onItemSelected={this.onItemSelected}
                      onDeleteItem={this.handleDeleteItem}
                    />
                  ))}
                  <div className={styles.fullWidthPlusButton} onClick={this.toggleAddItemForm}>
                    <Plus />{strings.addItemButtonText}
                  </div>
                  {invoiceItems.length === 0 && showAddItemForm && (
                    <MessageBar>
                      Please add items to the invoice before generating a PDF.
                    </MessageBar>
                  )}
                  <div className={styles.itemsTableFooter}>
                    <InvoiceSummary subtotal={this.calculateSubtotal()} taxRate={taxRate} />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </Customizer>
    );
  }
}
