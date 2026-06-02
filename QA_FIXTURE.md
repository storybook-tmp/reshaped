# Reshaped ADE QA Fixture

Branch: `qa/no-storybook`

Purpose: Reshaped control target with Storybook removed entirely.

Expected state:

- No `.storybook` directory.
- No `*.stories.tsx` files.
- No `src/utilities/storybook` utilities.
- No `tsconfig.stories.json`.
- No Storybook, MCP addon, Storybook Vitest addon, Storybook eslint plugin, or Chromatic packages.
- No Storybook, Chromatic, visual-regression, or Storybook browser-test scripts in `package.json`.

Lightweight verification run on June 2, 2026:

- `CI=true npx -y pnpm@10.19.0 install --frozen-lockfile`
- `npx -y pnpm@10.19.0 exec vitest run --project=unit`
