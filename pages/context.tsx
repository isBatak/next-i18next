import * as React from 'react';
import { withI18next } from '../lib/withI18next';
import { TranslationFunction } from 'i18next';

export interface IContextProps {
  t: TranslationFunction;
}

class Context extends React.Component<IContextProps, any> {
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
          {t('context:friend')}
        </h1>
        <h1>
          {t('context:friend', { context: 'male' })}
        </h1>
        <h1>
          {t('context:friend', { context: 'female' })}
        </h1>
      </React.Fragment>
    );
  }
}

export default withI18next((['context', 'common']))(Context);
