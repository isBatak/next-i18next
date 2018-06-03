import * as React from 'react';
import { withI18next } from '../lib/withI18next';
import { TranslationFunction } from 'i18next';

export interface INestingProps {
  t: TranslationFunction;
}

class Nesting extends React.Component<INestingProps, any> {
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
          {t('nesting:nesting1')}
        </h1>
      </React.Fragment>
    );
  }
}

export default withI18next((['nesting', 'common']))(Nesting);
