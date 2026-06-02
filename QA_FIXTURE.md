# Reshaped ADE QA Fixture

Branch: `main`

Purpose: primary ADE QA target for the latest Storybook 10 alpha with the MCP addon enabled.

Expected state:

- Storybook packages use `10.5.0-alpha.3`.
- `@storybook/addon-mcp` is installed at `0.6.0`.
- `.storybook/main.ts` includes `@storybook/addon-mcp` in the `addons` array.

Lightweight verification run on June 2, 2026:

- `CI=true npx -y pnpm@10.19.0 install --frozen-lockfile`
- `CI=true STORYBOOK_DISABLE_TELEMETRY=1 npx -y pnpm@10.19.0 exec storybook dev -p 6106 --ci --no-open --exact-port --disable-telemetry`

The Storybook dev server reached the ready state on `http://localhost:6106/`.
Port `3001` was not used during verification because it was already occupied by a local `next-server` process.
