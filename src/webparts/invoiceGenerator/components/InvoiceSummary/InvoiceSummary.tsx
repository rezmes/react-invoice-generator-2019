import * as React from 'react';
import styles from './InvoiceSummary.module.scss';

export interface IInvoiceSummaryProps {
  subtotal: number;
  taxRate: number;
}

export interface IInvoiceSummaryState {
  tax: number;
  total: number;
}

export default class InvoiceSummary extends React.Component<IInvoiceSummaryProps, IInvoiceSummaryState> {
  constructor(props: IInvoiceSummaryProps) {
    super(props);

    const tax = this.calculateTax(props.subtotal, props.taxRate);
    const total = this.calculateTotal(props.subtotal, tax);

    this.state = {
      tax: tax,
      total: total
    };
  }

  public componentWillReceiveProps(nextProps: IInvoiceSummaryProps): void {
    if (nextProps.subtotal !== this.props.subtotal || nextProps.taxRate !== this.props.taxRate) {
      const tax = this.calculateTax(nextProps.subtotal, nextProps.taxRate);
      const total = this.calculateTotal(nextProps.subtotal, tax);
      this.setState({
        tax: tax,
        total: total
      });
    }
  }

  private calculateTax(subtotal: number, taxRate: number): number {
    return subtotal * (taxRate / 100);
  }

  private calculateTotal(subtotal: number, tax: number): number {
    return subtotal + tax;
  }

  public render(): React.ReactElement<IInvoiceSummaryProps> {
    return (
      <div className={styles.summary}>
        <div className={styles.row}>
          <div className={styles.label}>Subtotal:</div>
          <div className={styles.value}>${this.props.subtotal.toFixed(2)}</div>
        </div>
        <div className={styles.row}>
          <div className={styles.label}>Tax ({this.props.taxRate}%):</div>
          <div className={styles.value}>${this.state.tax.toFixed(2)}</div>
        </div>
        <div className={styles.row}>
          <div className={styles.label}>Total:</div>
          <div className={styles.value}>${this.state.total.toFixed(2)}</div>
        </div>
      </div>
    );
  }
}
// export default InvoiceSummary
