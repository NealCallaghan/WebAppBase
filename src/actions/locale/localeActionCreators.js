import * as localeActionTypes from './localeActionTypes';

export default function changeLocale(locale) {
  return { type: localeActionTypes.CHANGE_LOCALE_LANGUAGE_SUCCESS, locale };
}
