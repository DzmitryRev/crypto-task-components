import React from "react";

import GlobalStyles from "../src/styles/global";
import { defaultTheme } from "../src/styles/theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles theme={defaultTheme} />
      <Story />
    </>
  ),
];
