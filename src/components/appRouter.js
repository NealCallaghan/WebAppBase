import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { IntlProvider, addLocaleData } from 'react-intl';
import ApplicationBar from 'components/navigation/appBarContainer';
import languageObject from 'translations/messages';
import en from 'react-intl/locale-data/en';
import ja from 'react-intl/locale-data/ja';
import HomeComponent from './home/homeComponent';


addLocaleData(en);
addLocaleData(ja);

export const AppRouter = props => (
  <div>
    <Router>
      <IntlProvider locale={props.locale} messages={languageObject[props.locale]}>
        <div>
          <ApplicationBar />
          <Switch>
            <Route path="/" exact component={HomeComponent} />
          </Switch>
        </div>
      </IntlProvider>
    </Router>
  </div>
);

AppRouter.propTypes = {
  locale: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({ locale: state.localeReducer.locale });

export default connect(mapStateToProps)(AppRouter);
