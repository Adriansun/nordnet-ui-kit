import { createThemeProvider } from '@iamstarkov/jss-theme-reactor/ThemeProvider';
import { stripIndent } from 'common-tags';
import { createTheme } from './theme';

// https://github.com/RikardGehlin/jss-theme-reactor/blob/master/src/ThemeProvider.js
export default (function() {
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.warn(stripIndent`
      nordnet-ui-kit's \`ThemeProvider\` is deprecated and will be removed in major release.
      Please use react-jss's \`ThemeProvider\`.
      See more https://github.com/nordnet/nordnet-ui-kit/releases/tag/v1.7.0
    `);
  }
  return createThemeProvider(createTheme);
})()
