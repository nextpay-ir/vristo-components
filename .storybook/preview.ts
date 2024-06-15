import type { Preview } from "@storybook/react";
import '../src/index.css'
import { themes } from '@storybook/theming';

const preview: Preview = {
  parameters: {
    darkMode: {
      dark: { ...themes.dark, appBg: 'black' },
      light: { ...themes.normal, appBg: 'white' },
      current: 'light'
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  tags: ["autodocs"]
};

export default preview;
