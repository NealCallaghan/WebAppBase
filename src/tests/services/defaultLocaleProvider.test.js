import localeProvider from 'services/defaultLocaleProvider';

const getNavObjectWithLanguagesOnly = () => ({ languages: ['en-GB', 'en-US', 'en'] });

const getNavObjectWithSourceLanguageOnly = () => ({ language: 'en-GB' });

const getNavObjectWithUserLangauageOnly = () => ({ userLanguage: 'en-GB' });

const getNavObjectWithFullFields = () => ({
  languages: ['en-GB', 'en-US', 'en'],
  language: 'en-GB',
  userLanguage: 'en-GB',
});

describe('Ensure that default locale function provides the correct results.', () => {
  it('return correct language with languages only', () => {
    const navObject = getNavObjectWithLanguagesOnly();
    const result = localeProvider(navObject);
    expect(result).toBe('en');
  });

  it('return correct language with source language only', () => {
    const navObject = getNavObjectWithSourceLanguageOnly();
    const result = localeProvider(navObject);
    expect(result).toBe('en');
  });

  it('return correct language with user language only', () => {
    const navObject = getNavObjectWithUserLangauageOnly();
    const result = localeProvider(navObject);
    expect(result).toBe('en');
  });

  it('return correct language with full fields', () => {
    const navObject = getNavObjectWithFullFields();
    const result = localeProvider(navObject);
    expect(result).toBe('en');
  });
});
