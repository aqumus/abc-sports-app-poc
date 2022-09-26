import React from 'react';
import './tailwind-imports.css';

/**
 * Overwriting next/image component to render with "unoptimised" prop
 * This helps us to avoid next.js image optimisation and render images as it is
 * Reference: https://dev.to/jonasmerlin/how-to-use-the-next-js-image-component-in-storybook-1415
 */
import * as NextImage from 'next/image';
const OriginalNextImage = NextImage.default;
Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props: any) => <OriginalNextImage {...props} unoptimized />,
});

const withThemeProvider = (Story: any, context: any) => {
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
