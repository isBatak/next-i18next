import * as React from 'react';
import { withI18next } from '../lib/withI18next';
import { TranslationFunction } from 'i18next';

export interface IPluralsProps {
  t: TranslationFunction;
}

// You can use this small utility to get the correct plural suffixes.
// https://jsfiddle.net/jamuhl/3sL01fn0/#tabs=result

class Plurals extends React.Component<IPluralsProps, any> {
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
          {t('plurals:key', { count: 0 })}
        </h1>
        <h1>
          {t('plurals:key', { count: 1 })}
        </h1>
        <h1>
          {t('plurals:key', { count: 2 })}
        </h1>
        <h1>
          {t('plurals:key', { count: 5 })}
        </h1>
      </React.Fragment>
    );
  }
}

export default withI18next((['plurals', 'common']))(Plurals);
