# Lantern App

### Features

- [PNPM](https://pnpm.io/installation) - Package manager
- [Vite](https://vitejs.dev/guide/) - Build tool
- [React](https://reactjs.org/docs/getting-started.html)
- [Typescript](https://www.typescriptlang.org/docs/)
- [React query](https://react-query.tanstack.com/overview)
- [React Hook Form](https://react-hook-form.com/get-started)
- [Twin.macro](https://github.com/ben-rogerson/twin.macro) - Styled components with tailwind
- [Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress) - Automated tests

### Installation

```sh
pnpm install
```

### Copy and fill in environment variables

Copy `.env.local.example` as `.env.local` and fill in missing environment variables.
(All env variables in vite must have prefix "VITE\_")

| Variable            | Description    |
| ------------------- | -------------- |
| `VITE_APP_ID`       | Application ID |
| `VITE_REST_API_KEY` | API secret key |
| `VITE_USERNAME`     | Username       |
| `VITE_PASSWORD`     | Password       |

### Start dev server

```sh
pnpm dev
```

### Autofix lint errors

```sh
pnpm lint:fix
```

### Build app

```sh
pnpm build
```

### Testing

Cypress tests in console:

```sh
pnpm cypress
```

Cypress tests with GUI:

```sh
pnpm cypress:gui
```
