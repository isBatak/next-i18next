import * as React from 'react';
import { withI18next } from '../lib/withI18next';
import { LanguagePicker } from '../components/LanguagePicker';
import { Navigation } from '../components/Navigation';

export interface IIndexProps {
  i18n: any;
}

class IndexPage extends React.Component<IIndexProps, any> {
  public render() {
    return (
      <React.Fragment>
        <LanguagePicker i18n={this.props.i18n} />
        <Navigation />
      </React.Fragment>
    );
  }
}

export default withI18next((['home', 'common']))(IndexPage);
