import * as LocaleTypes from 'actions/locale/localeActionTypes';
import changeLocale from 'actions/locale/localeActionCreators';

describe('Ensure locale action creators return expected values', () => {
  it('change locale returns the correct type', () => {
    const action = changeLocale('en');
    expect(action.type).toBe(LocaleTypes.CHANGE_LOCALE_LANGUAGE_SUCCESS);
  });

  it('change locale returns the correct language', () => {
    const action = changeLocale('en');
    expect(action.locale).toBe('en');
  });
});
