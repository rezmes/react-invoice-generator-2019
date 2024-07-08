import * as React from 'react';
import { WebPartContext } from "@microsoft/sp-webpart-base";
import { IInvoice } from '../models/IInvoice'; // Ensure this path is correct
import { InvoiceService } from '../services/InvoiceService'; // Ensure this path is correct

interface IInvoiceGeneratorState {
    invoices: IInvoice[];
    isLoading: boolean;
    error: string | null;
}

interface IInvoiceGeneratorProps {
    context: WebPartContext;
    // Include any other props you need to pass in
}

export default class InvoiceGenerator extends React.Component<IInvoiceGeneratorProps, IInvoiceGeneratorState> {
    constructor(props: IInvoiceGeneratorProps) {
        super(props);
        this.state = {
            invoices: [],
            isLoading: false,
            error: null
        };
    }

    componentDidMount() {
        this.loadInvoices();
    }

    async loadInvoices() {
        const invoiceService = new InvoiceService(this.props.context);
        this.setState({ isLoading: true });
        try {
            const invoices = await invoiceService.getInvoices();
            this.setState({ invoices, isLoading: false });
        } catch (error) {
            console.error('Failed to load invoices:', error);
            this.setState({ error: 'Failed to load invoices', isLoading: false });
        }
    }

    render() {
        const { invoices, isLoading, error } = this.state;

        if (isLoading) {
            return <div>Loading...</div>;
        }

        if (error) {
            return <div>{error}</div>;
        }

        return (
            <div>
                <h1>Invoice List</h1>
                {invoices.length > 0 ? (
                    <ul>
                        {invoices.map(invoice => (
                            <li key={invoice.ID}>
                                {invoice.Title} - {invoice.billTo}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No invoices found.</p>
                )}
            </div>
        );
    }
}
