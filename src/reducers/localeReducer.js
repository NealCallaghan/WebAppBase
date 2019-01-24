import defaultLocaleProvider from 'services/defaultLocaleProvider';
import * as localeActionTypes from 'actions/locale/localeActionTypes';

const initialState = {
  locale: defaultLocaleProvider(navigator),
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case localeActionTypes.CHANGE_LOCALE_LANGUAGE_SUCCESS:
      return { ...state,
        locale: action.locale };

    default:
      return state;
  }
};
