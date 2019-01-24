export default (source) => {
  // Attempt to obtain language from browser navigator
  const language = (source.languages && source.languages[0])
    || source.language
    || source.userLanguage;

  // Split locales with a region code
  const locale = language.toLowerCase().split(/[_-]+/)[0];

  return locale;
};
