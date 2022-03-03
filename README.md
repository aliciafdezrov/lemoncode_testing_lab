# Lemoncode React testing laboratory

![example workflow](https://github.com/aliciafdezrov/lemoncode_testing_lab/actions/workflows/ci.yml/badge.svg)

## Documentation

This project uses [cypress](https://docs.cypress.io/guides/overview/why-cypress) v9.5.0 and [jest](https://jestjs.io/docs/getting-started) v27.5.1.


## Installation
```sh
$ npm install
```

## Features of this project

- All unit tests are runnable by:
```sh
 npm test
```

Unit tests are implemented for:

1. [project-mapper](./src/pods/project/project.mapper.ts)
2. [confirmation-dialog.component](./src/common/components/confirmation-dialog/confirmation-dialog.component.tsx)
3. [confirmation-dialog.hook](./src/common/components/confirmation-dialog/confirmation-dialog.hook.ts)
4. [spinner-component](./src/common/components/spinner/spinner.component.tsx)

- All e2e tests are runnable by:

 ```sh
npm run test:e2e
```
E2E tests are implemented for:

1. [project-list.scene](./src/scenes/project-list.scene.tsx)

