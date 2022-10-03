# Abc Racing App

This project was generated using [Nx](NX_README.md).
This project core-app is powered by [Next.js](https://nextjs.org/)

## Core App

#### Development server

Run `nx serve core-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

#### Build

Run `nx build core-app` for building core-app which generates files at `dist/apps/core-app/.next/`

#### Running unit tests

Run `nx test core-app` to execute the unit tests via [Jest](https://jestjs.io).

## Shared Components

Host all React based atomic presentation (dummy) components which is model agnostic and could be reused in any business UI implementation

#### Storybook Catalog

Run `nx storybook shared-components` for a . Navigate to http://localhost:4400/. The storybook app will automatically reload if you change any of the source files.

#### Build

Run `nx build-storybook shared-components` for building shared-components storybook which generates files at `dist/storybook/shared-components/`

#### Running unit tests

Run `nx test shared-components` to execute the unit tests via [Jest](https://jestjs.io).
