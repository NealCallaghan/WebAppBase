import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import changeLocale from 'actions/locale/localeActionCreators';

const homeComponent = props => (
  <div>
    <FormattedMessage id="homeComponent.title" defaultMessage="Default message" />
    <button type="button" onClick={() => { props.updateLanguage('en'); }}><FormattedMessage id="homeComponent.english" defaultMessage="Default message" /></button>
    <button type="button" onClick={() => { props.updateLanguage('ja'); }}><FormattedMessage id="homeComponent.japanese" defaultMessage="Default message" /></button>
  </div>
);

const mapDispatchToProps = dispatch => ({
  updateLanguage: targetLocale => dispatch(changeLocale(targetLocale)) });

export default connect(null, mapDispatchToProps)(homeComponent);
