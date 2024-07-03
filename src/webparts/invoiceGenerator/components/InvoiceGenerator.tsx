
import * as React from 'react';
import styles from './InvoiceGenerator.module.scss';
import { IInvoiceGeneratorProps } from './IInvoiceGeneratorProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { InvoiceHeader } from './InvoiceHeader/InvoiceHeader';

export interface IInvoiceGeneratorState {
  issueDate: Date;
  dueDate: Date;
}

export default class InvoiceGenerator extends React.Component<IInvoiceGeneratorProps, IInvoiceGeneratorState> {
  constructor(props: IInvoiceGeneratorProps) {
    super(props);

    this.state = {
      issueDate: new Date(),
      dueDate: new Date()
    };

    this.handleIssueDateChange = this.handleIssueDateChange.bind(this);
    this.handleDueDateChange = this.handleDueDateChange.bind(this);
  }

  handleIssueDateChange(date: Date): void {
    this.setState({ issueDate: date });
  }

  handleDueDateChange(date: Date): void {
    this.setState({ dueDate: date });
  }

  render(): React.ReactElement<IInvoiceGeneratorProps> {
    const { issueDate, dueDate } = this.state;
    const { companyName, companyAddress, description } = this.props;

    return (
      <div className={styles.invoiceGenerator}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <InvoiceHeader
                invoiceNumber={7}
                customerName={'Customer Name'}
                customerAddress={'Customer Address'}
                amountdue={3}
                companyName={companyName}
                companyAddress={companyAddress}
                issueDate={issueDate}
                dueDate={dueDate}
                onIssueDateChange={this.handleIssueDateChange}
                onDueDateChange={this.handleDueDateChange}
              />

            </div>
          </div>
        </div>
      </div>
    );
  }
}
