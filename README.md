## ts-template

Pre-configured TypeScript project.

### Extras

- jest (using ts-jest)
- conventional-commits setup via husky
- ts-node-dev setup for dev and debug
- prettier
- eslint linting
  - "eslint:recommended",
  - "plugin:@typescript-eslint/recommended",
  - "prettier/@typescript-eslint"

### Scripts
Pre configred scripts in `package.json`.

#### start

Start service.

#### build

Transpile ts to js (in `/dist` folder).

#### lint

Lint project using eslint.

#### dev

Run service, restarting when files are changed.

#### debug

Pre configred scripts in `package.json`.
Same as `yarn watch` but can connect to debugger. Visit [chrome://inspect](chrome://inspect).
