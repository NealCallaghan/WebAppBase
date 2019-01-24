import locReducer from 'reducers/localeReducer';
import changeLocale from 'actions/locale/localeActionCreators';

jest.mock('services/defaultLocaleProvider');

describe('Tests whether the locale reducer contains pure functions', () => {
  it('given changeLocale set to English state is changed in the reducer to English', () => {
    const action = changeLocale('en');
    const newState = locReducer({}, action);
    expect(newState.locale).toBe('en');
  });

  it('given changeLocale set to Japanese state is changed in the reducer to Japanese', () => {
    const action = changeLocale('ja');
    const newState = locReducer({}, action);
    expect(newState.locale).toBe('ja');
  });

  it('given changeLocale set to English state is changed and is immutable', () => {
    const initialState = {};
    const action = changeLocale('en');
    const newState = locReducer(initialState, action);
    expect(newState !== initialState).toBe(true);
  });

  it('locale reducer returns state with default mocked locale', () => {
    const newState = locReducer();
    expect(newState.locale).toBe('fakeLocale');
  });
});
