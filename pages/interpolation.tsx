import * as React from 'react';
import { withI18next } from '../lib/withI18next';
import { TranslationFunction } from 'i18next';

export interface IInterpolationProps {
  t: TranslationFunction;
}

class Interpolation extends React.Component<IInterpolationProps, any> {
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
          {t('interpolation:key', { what: 'i18next' })}
        </h1>
      </React.Fragment>
    );
  }
}

export default withI18next((['interpolation', 'common']))(Interpolation);
