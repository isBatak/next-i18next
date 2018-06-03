import * as React from 'react';
import { withI18next } from '../lib/withI18next';
import { TranslationFunction } from 'i18next';

export interface IFormatingProps {
  t: TranslationFunction;
}

class Formating extends React.Component<IFormatingProps, any> {
  public render() {
    const {
      t,
    } = this.props;

    return (
      <React.Fragment>
        <em>
          {t('common:example')}
        </em>
        <h1>
          {t('formating:key', { text: 'text' })}
        </h1>
      </React.Fragment>
    );
  }
}

export default withI18next((['formating', 'common']))(Formating);
