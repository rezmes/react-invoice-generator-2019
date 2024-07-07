// import * as React from 'react';
// import * as ReactDom from 'react-dom';
// import { Version } from '@microsoft/sp-core-library';
// import {
//   BaseClientSideWebPart,
//   IPropertyPaneConfiguration,
//   PropertyPaneTextField
// } from '@microsoft/sp-webpart-base';

// import * as strings from 'InvoiceGeneratorWebPartStrings';
// import InvoiceGenerator from './components/InvoiceGenerator';
// import { IInvoiceGeneratorProps } from './components/IInvoiceGeneratorProps';

// export interface IInvoiceGeneratorWebPartProps {
//   description: string;
// }

// export default class InvoiceGeneratorWebPart extends BaseClientSideWebPart<IInvoiceGeneratorWebPartProps> {

//   public render(): void {
//     const element: React.ReactElement<IInvoiceGeneratorProps > = React.createElement(
//       InvoiceGenerator,
//       {
//         description: this.properties.description
//       }
//     );

//     ReactDom.render(element, this.domElement);
//   }

//   protected onDispose(): void {
//     ReactDom.unmountComponentAtNode(this.domElement);
//   }

//   protected get dataVersion(): Version {
//     return Version.parse('1.0');
//   }

//   protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
//     return {
//       pages: [
//         {
//           header: {
//             description: strings.PropertyPaneDescription
//           },
//           groups: [
//             {
//               groupName: strings.BasicGroupName,
//               groupFields: [
//                 PropertyPaneTextField('description', {
//                   label: strings.DescriptionFieldLabel
//                 })
//               ]
//             }
//           ]
//         }
//       ]
//     };
//   }
// }


import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneSlider
} from '@microsoft/sp-webpart-base';


import {InvoiceGenerator} from './components/InvoiceGenerator';
import { IInvoiceGeneratorProps } from './components/IInvoiceGeneratorProps';
// import styles from './InvoiceGeneratorWebPart.module.scss';

export interface IInvoiceGeneratorWebPartProps {
  logoImage: string;
  listId: string;
  taxRate: number;
  companyName: string;
  companyAddress: string;
  description: string;
}

export default class InvoiceGeneratorWebPart extends BaseClientSideWebPart<IInvoiceGeneratorWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IInvoiceGeneratorProps> = React.createElement(
      InvoiceGenerator,
      {
        logoImage: this.properties.logoImage,
        listId: this.properties.listId,
        context: this.context,
        taxRate: this.properties.taxRate,
        companyName: this.properties.companyName,
        companyAddress: this.properties.companyAddress,
        description: this.properties.description,
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  // protected get dataVersion(): Version {
  //   return Version.parse('1.0');
  // }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: "Configure your Invoice Generator"
          },
          groups: [
            {
              groupName: "Settings",
              groupFields: [
                PropertyPaneTextField('logoImage', {
                  label: "Logo Image URL"
                }),
                PropertyPaneTextField('listId', {
                  label: "List ID"
                }),
                PropertyPaneSlider('taxRate', {
                  label: "Tax Rate",
                  min: 0,
                  max: 100,
                  step: 0.1
                }),
                PropertyPaneTextField('companyName', {
                  label: "Company Name"
                }),
                PropertyPaneTextField('companyAddress', {
                  label: "Company Address"
                }),
                PropertyPaneTextField('description', {
                  label: "Description",
                  multiline: true,
                  rows: 3
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
