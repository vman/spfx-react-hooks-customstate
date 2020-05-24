import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'ConsumerWebPartStrings';
import Consumer from './components/Consumer';
import { IConsumerProps } from './components/IConsumerProps';

export interface IConsumerWebPartProps {
  description: string;
}

export default class ConsumerWebPart extends BaseClientSideWebPart <IConsumerWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IConsumerProps> = React.createElement(Consumer, {});

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

}
