
// // // \\\\\\\\\        DEFAULT    /////////
// // // import * as React from 'react';
// // // import styles from './InvoiceGenerator.module.scss';
// // // import { IInvoiceGeneratorProps } from './IInvoiceGeneratorProps';
// // // import { escape } from '@microsoft/sp-lodash-subset';

// // // export default class InvoiceGenerator extends React.Component < IInvoiceGeneratorProps, {} > {
// // //   public render(): React.ReactElement<IInvoiceGeneratorProps> {
// // //     return(
// // //       <div className = { styles.invoiceGenerator } >
// // //   <div className={styles.container}>
// // //     <div className={styles.row}>
// // //       <div className={styles.column}>
// // //         <span className={styles.title}>Welcome to SharePoint!</span>
// // //         <p className={styles.subTitle}>Customize SharePoint experiences using Web Parts.</p>
// // //         <p className={styles.description}>{escape(this.props.description)}</p>
// // //         <a href='https://aka.ms/spfx' className={styles.button}>
// // //           <span className={styles.label}>Learn more</span>
// // //         </a>
// // //       </div>
// // //     </div>
// // //   </div>
// // //       </div >
// // //     );
// // //   }
// // // }

// // import * as React from 'react';
// // import styles from './InvoiceGenerator.module.scss';
// // import { IInvoiceGeneratorProps } from './IInvoiceGeneratorProps';
// // //import { escape } from '@microsoft/sp-lodash-subset';
// // import { IInvoiceGeneratorState } from './IInvoiceGeneratorState';
// // import {  IInvoice } from '../models/IInvoice';
// // //import {  IInvoiceItem } from '../models/IInvoiceItem';

// // // interface IInvoiceGeneratorState {
// // //   // Define the state structure here
// // //   exampleState: string;
// // // }



// // export default class InvoiceGenerator extends React.Component<IInvoiceGeneratorProps, IInvoiceGeneratorState> {
// //   constructor(props: IInvoiceGeneratorProps) {
// //     super(props);

// //     // Initialize state
// //     this.state = {
// //         // selectedInvoiceIndex: '',
// //         // invoices: [],
// //         // showAddItemForm: false,
// //         // itemDescription: '',
// //         // quantity: 0,
// //         // price: 0,
// //         // invoiceItems: [],
// //         // selectedItem: null,
// //         // issueDate: '',
// //         // dueDate: '',
// //         // taxRate: props.taxRate,
// //         // companyName: props.companyName,
// //         // companyAddress: props.companyAddress
// //         invoices: [],
// //         invoiceItems: [],
// //         selectedItem: null
// //     };
// //   }


// //   private handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
// //     // Handle input change
// //   }

// //   private handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
// //     // Handle quantity change
// //   }

// //   private handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
// //     // Handle price change
// //   }

// //   private handleAddItem = () => {
// //     // Handle add item
// //   }





// // //به اینجا باید برگردم didmount ممکنه لازم بشه
// // //   public componentDidMount() {
// // //     // Perform actions after the component has mounted, e.g., data fetching
// // //     this.setState({ exampleState: 'Updated state value after mount' });
// // //   }





// // public componentDidMount() {
// //     this.loadInvoices();
// //   }

// //   private async loadInvoices() {
// //     try {
// //       const invoices: IInvoice[] = await this.props.invoiceService.getInvoice(this.props.listId);
// //       this.setState({ invoices });
// //     } catch (error) {
// //       console.error('Error loading invoices:', error);
// //     }
// //   }
// // //ِ         \\\\\\\\\\      DEFAULT        ////////////////
// // //   public render(): React.ReactElement<IInvoiceGeneratorProps> {
// // //     return (
// // //       <div className={styles.invoiceGenerator}>
// // //         <div className={styles.container}>
// // //           <div className={styles.row}>
// // //             <div className={styles.column}>
// // //               <span className={styles.title}>Welcome to SharePoint!</span>
// // //               <p className={styles.subTitle}>Customize SharePoint experiences using Web Parts.</p>
// // //               <p className={styles.description}>{escape(this.props.description)}</p>
// // //               {/* <p className={styles.description}>{this.state.exampleState}</p> */}
// // //               <a href='https://aka.ms/spfx' className={styles.button}>
// // //                 <span className={styles.label}>Learn more</span>
// // //               </a>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     );
// // //   }

// // // public render(): React.ReactElement<IInvoiceGeneratorProps> {
// // //     const { invoices, selectedInvoiceIndex, itemDescription, quantity, price, invoiceItems, showAddItemForm } = this.state;

// // //     return (
// // //       <div className={styles.invoiceGenerator}>
// // //         <select
// // //           value={selectedInvoiceIndex}
// // //           onChange={(e) => this.setState({ selectedInvoiceIndex: e.target.value })}
// // //         >
// // //           {invoices.map((invoice, index) => (
// // //             <option key={invoice.ID} value={index}>
// // //               {invoice.Title}
// // //             </option>
// // //           ))}
// // //         </select>

// // //         <div className={styles.itemsContainer}>
// // //           <div className={styles.itemsTable}>
// // //             <div className={styles.itemsTableHeader}>
// // //               <div className={styles.itemDescription}>Description</div>
// // //               <div className={styles.itemQuantity}>Quantity</div>
// // //               <div className={styles.itemPrice}>Price</div>
// // //               <div className={styles.itemTotal}>Total</div>
// // //             </div>

// // //             {showAddItemForm && (
// // //               <div className={styles.addItem}>
// // //                 <input
// // //                   type="text"
// // //                   placeholder="Description"
// // //                   value={itemDescription}
// // //                   onChange={this.handleInputChange}
// // //                   name="itemDescription"
// // //                 />
// // //                 <input
// // //                   type="number"
// // //                   placeholder="Quantity"
// // //                   value={quantity}
// // //                   onChange={this.handleQuantityChange}
// // //                 />
// // //                 <input
// // //                   type="number"
// // //                   placeholder="Price"
// // //                   value={price}
// // //                   onChange={this.handlePriceChange}
// // //                 />
// // //                 <button onClick={this.handleAddItem}>Add Item</button>
// // //               </div>
// // //             )}

// // //             {invoiceItems.map((item) => (
// // //               <div key={item.id} className={styles.invoiceItemRow}>
// // //                 <div>{item.description}</div>
// // //                 <div>{item.quantity}</div>
// // //                 <div>{item.price}</div>
// // //                 <div>{item.quantity * item.price}</div>
// // //               </div>
// // //             ))}

// // //             <div onClick={() => this.setState({ showAddItemForm: !showAddItemForm })}>
// // //               Add Item
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     );
// // //   }



// // // }

// // public render(): React.ReactElement<IInvoiceGeneratorProps> {
// //     return (
// //       <div className={styles.invoiceGenerator}>
// //         <div className={styles.itemsContainer}>
// //           <table className={styles.itemsTable}>
// //             <thead className={styles.itemsTableHeader}>
// //               <tr>
// //                 <th>Description</th>
// //                 <th>Quantity</th>
// //                 <th>Price</th>
// //                 <th>Total</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {this.state.invoiceItems.map(item => (
// //                 <tr key={item.id} className={styles.invoiceItemRow}>
// //                   <td>{item.description}</td>
// //                   <td>
// //                     <input
// //                       type="number"
// //                       value={item.quantity}
// //                       onChange={this.handleQuantityChange}
// //                       placeholder='Quantity'
// //                     />
// //                   </td>
// //                   <td>
// //                     <input
// //                       type="number"
// //                       value={item.price}
// //                       onChange={this.handlePriceChange}
// //                       placeholder='Price'
// //                     />
// //                   </td>
// //                   <td>{item.quantity * item.price}</td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //           <button onClick={this.handleAddItem} className={styles.addItem}>Add Item</button>
// //         </div>
// //       </div>
// //     );
// //   }
// // }


// import * as React from 'react';
// import styles from './InvoiceGenerator.module.scss';
// import { IInvoiceGeneratorProps } from './IInvoiceGeneratorProps';
// import { IInvoiceGeneratorState } from './IInvoiceGeneratorState';
// import { IInvoice } from '../models/IInvoice';

// export default class InvoiceGenerator extends React.Component<IInvoiceGeneratorProps, IInvoiceGeneratorState> {
//   constructor(props: IInvoiceGeneratorProps) {
//     super(props);
//     this.state = {
//       invoices: [],
//       invoiceItems: [],
//       selectedItem: null
//     };
//   }

//   componentDidMount() {
//     this.loadInvoices();
//   }

//   private async loadInvoices() {
//     try {
//       const invoices: IInvoice[] = await this.props.invoiceService.getInvoice(this.props.listId);
//       this.setState({ invoices });
//     } catch (error) {
//       console.error('Error loading invoices:', error);
//     }
//   }

//   private handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, id: number, field: string) => {
//     const newItems = this.state.invoiceItems.map(item => {
//       if (item.id === id) {
//         return { ...item, [field]: event.target.value };
//       }
//       return item;
//     });
//     this.setState({ invoiceItems: newItems });
//   }

//   private handleAddItem = () => {
//     const newItem = {
//       id: this.state.invoiceItems.length + 1,
//       description: '',
//       quantity: 0,
//       price: 0
//     };
//     this.setState({ invoiceItems: [...this.state.invoiceItems, newItem] });
//   }

//   private calculateTotal = () => {
//     return this.state.invoiceItems.reduce((total, item) => total + (item.quantity * item.price), 0);
//   }

//   public render(): React.ReactElement<IInvoiceGeneratorProps> {
//     return (
//       <div className={styles.invoiceGenerator}>
//         <div className={styles.itemsContainer}>
//           <table className={styles.itemsTable}>
//             <thead className={styles.itemsTableHeader}>
//               <tr>
//                 <th>Description</th>
//                 <th>Quantity</th>
//                 <th>Price</th>
//                 <th>Total</th>
//               </tr>
//             </thead>
//             <tbody>
//               {this.state.invoiceItems.map(item => (
//                 <tr key={item.id} className={styles.invoiceItemRow}>
//                   <td>
//                     <input
//                       type="text"
//                       value={item.description}
//                       onChange={(e) => this.handleInputChange(e, item.id, 'description')}
//                     />
//                   </td>
//                   <td>
//                     <input
//                       type="number"
//                       value={item.quantity}
//                       onChange={(e) => this.handleInputChange(e, item.id, 'quantity')}
//                     />
//                   </td>
//                   <td>
//                     <input
//                       type="number"
//                       value={item.price}
//                       onChange={(e) => this.handleInputChange(e, item.id, 'price')}
//                     />
//                   </td>
//                   <td>{item.quantity * item.price}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           <button onClick={this.handleAddItem} className={styles.addItem}>Add Item</button>
//           <div>Total: {this.calculateTotal()}</div>
//         </div>
//       </div>
//     );
//   }
// }


import * as React from 'react';
import styles from './InvoiceGenerator.module.scss';
import { IInvoiceGeneratorProps } from './IInvoiceGeneratorProps';
import { IInvoiceGeneratorState } from './IInvoiceGeneratorState';
import { IInvoice } from '../models/IInvoice';
import jsPDF from 'jspdf';

export default class InvoiceGenerator extends React.Component<IInvoiceGeneratorProps, IInvoiceGeneratorState> {
  constructor(props: IInvoiceGeneratorProps) {
    super(props);
    this.state = {
      invoices: [],
      invoiceItems: [],
      selectedItem: null
    };
  }

  componentDidMount() {
    this.loadInvoices();
  }

  private async loadInvoices() {
    try {
      const invoices: IInvoice[] = await this.props.invoiceService.getInvoice(this.props.listId);
      this.setState({ invoices });
    } catch (error) {
      console.error('Error loading invoices:', error);
    }
  }

  private handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, id: number, field: string) => {
    const newItems = this.state.invoiceItems.map(item => {
      if (item.id === id) {
        return { ...item, [field]: event.target.value };
      }
      return item;
    });
    this.setState({ invoiceItems: newItems });
  }

  private handleAddItem = () => {
    const newItem = {
      id: this.state.invoiceItems.length + 1,
      description: '',
      quantity: 0,
      price: 0
    };
    this.setState({ invoiceItems: [...this.state.invoiceItems, newItem] });
  }

  private calculateTotal = () => {
    return this.state.invoiceItems.reduce((total, item) => total + (item.quantity * item.price), 0);
  }

  private handlePdfGeneration = () => {
    const doc = new jsPDF();
    doc.text('Invoice', 10, 10);

    this.state.invoiceItems.forEach((item, index) => {
      doc.text(`Item ${index + 1}: ${item.description}`, 10, 20 + (index * 10));
      doc.text(`Quantity: ${item.quantity}`, 10, 25 + (index * 10));
      doc.text(`Price: ${item.price}`, 10, 30 + (index * 10));
      doc.text(`Total: ${item.quantity * item.price}`, 10, 35 + (index * 10));
    });

    doc.save('invoice.pdf');
  }

  public render(): React.ReactElement<IInvoiceGeneratorProps> {
    return (
      <div className={styles.invoiceGenerator}>
        <div className={styles.itemsContainer}>
          <table className={styles.itemsTable}>
            <thead className={styles.itemsTableHeader}>
              <tr>
                <th>Description</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {this.state.invoiceItems.map(item => (
                <tr key={item.id} className={styles.invoiceItemRow}>
                  <td>
                    <input
                      type="text"
                      value={item.description}
                      onChange={(e) => this.handleInputChange(e, item.id, 'description')}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => this.handleInputChange(e, item.id, 'quantity')}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={item.price}
                      onChange={(e) => this.handleInputChange(e, item.id, 'price')}
                    />
                  </td>
                  <td>{item.quantity * item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={this.handleAddItem} className={styles.addItem}>Add Item</button>
          <div>Total: {this.calculateTotal()}</div>
          <button onClick={this.handlePdfGeneration} className={styles.generatePdf}>Generate PDF</button>
        </div>
      </div>
    );
  }
}
