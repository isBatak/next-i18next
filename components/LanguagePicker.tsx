import * as React from 'react';

interface ILanguagePicker {
  i18n: any;
}

export class LanguagePicker extends React.Component<ILanguagePicker, {}> {
  constructor(props) {
    super(props);

    this.changeLanguage = this.changeLanguage.bind(this);
  }

  public changeLanguage(event: React.ChangeEvent<HTMLSelectElement>) {
    this.props.i18n.changeLanguage(event.target.value);
  }

  public render() {
    const { i18n: { languages , language} } = this.props;
    console.log(languages);

    return (
      <select
        onChange={this.changeLanguage}
        value={language}
      >
        {
          languages.map((lng) => (
            <option key={lng} value={lng}>
              {lng}
            </option>
          ))
        }
      </select>
    );
  }
}
