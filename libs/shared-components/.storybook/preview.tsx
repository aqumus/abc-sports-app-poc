import React from 'react';
import './tailwind-imports.css';

const withThemeProvider = (Story, context) => {
  return (
    <div
      id="custom-root"
      className={`bg-slate-300 dark:bg-slate-900 text-slate-800 dark:text-slate-100`}
    >
      <Story {...context} />
    </div>
  );
};
export const decorators = [withThemeProvider];

export const globalTypes = {
  darkMode: true,
};

export const parameters = {
  layout: 'centered',
};
