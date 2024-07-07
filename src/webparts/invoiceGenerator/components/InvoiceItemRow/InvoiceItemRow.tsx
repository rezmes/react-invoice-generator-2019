import * as React from 'react';
import styles from './InvoiceItemRow.module.scss';
import { IInvoiceItem } from '../../../invoiceGenerator/models/index';

export interface IInvoiceItemRowProps {
  item: IInvoiceItem;
  isSelected: boolean;
  onItemSelected: (item: IInvoiceItem) => void;
  onDeleteItem: () => void;
}

export interface IInvoiceItemRowState {}

class InvoiceItemRow extends React.Component<IInvoiceItemRowProps, IInvoiceItemRowState> {
  constructor(props: IInvoiceItemRowProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleClick(): void {
    this.props.onItemSelected(this.props.item);
  }

  handleDelete(e: React.MouseEvent<HTMLButtonElement>): void {
    e.stopPropagation();
    this.props.onItemSelected(this.props.item);
    this.props.onDeleteItem();
  }

  render(): JSX.Element {
    const { item, isSelected } = this.props;

    return (
      <div
        className={`${styles.itemRow} ${isSelected ? styles.selectedItem : ''}`}
        onClick={this.handleClick}
      >
        <div className={styles.itemDescription}>{item.description}</div>
        <div className={styles.itemQuantity}>{item.quantity}</div>
        <div className={styles.itemPrice}>{item.price.toFixed(2)}</div>
        <div className={styles.itemTotal}>{item.totalAmount.toFixed(2)}</div>
        <button
          className={styles.deleteButton}
          onClick={this.handleDelete}
          title="Delete item"
          aria-label="Delete item"
        >
          <span className="ms-Icon ms-Icon--Delete" aria-hidden="true"></span>
        </button>
      </div>
    );
  }
}

export default InvoiceItemRow;
