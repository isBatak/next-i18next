import * as React from 'react';
import { withI18next } from '../lib/withI18next';
import { TranslationFunction } from 'i18next';
import { ComponentWithTrans } from '../components/ComponentWithTrans';

export interface ITransProps {
  t: TranslationFunction;
}

class Trans extends React.Component<ITransProps, any> {
  public render() {
    return (
      <ComponentWithTrans />
    );
  }
}

export default withI18next()(Trans);
