# Reshaped ADE QA Fixture

Branch: `qa/sb9-no-mcp`

Purpose: Storybook 9 control target without the MCP addon.

Expected state:

- Storybook packages use `9.1.20`.
- `@storybook/addon-mcp` is not installed.
- `.storybook/main.ts` does not include `@storybook/addon-mcp` in the `addons` array.
- `.storybook/main.ts` and `.storybook/plugins/preset.js` use the Storybook 9-compatible config shape.

Lightweight verification run on June 2, 2026:

- `CI=true npx -y pnpm@10.19.0 install --frozen-lockfile`
- `CI=true STORYBOOK_DISABLE_TELEMETRY=1 npx -y pnpm@10.19.0 exec storybook dev -p 6108 --ci --no-open --exact-port --disable-telemetry`

The Storybook dev server reached the ready state on `http://localhost:6108/`.
Port `3001` was not used during verification because it was already occupied by a local `next-server` process.
