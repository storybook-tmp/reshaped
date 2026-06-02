# Reshaped ADE QA Fixture

Branch: `qa/sb8-no-mcp`

Purpose: Storybook 8 control target without the MCP addon.

Expected state:

- Storybook packages use `8.6.18`.
- Vite is pinned to `6.4.3`, which is within Storybook 8's supported Vite peer range.
- `@storybook/addon-mcp` is not installed.
- `@storybook/addon-vitest` is not installed, because this fixture targets Storybook 8.
- `storybook/test` is aliased to `@storybook/test@8.6.18` for Storybook 8 story compatibility.
- `.storybook/main.ts` does not include `@storybook/addon-mcp` or `@storybook/addon-vitest` in the `addons` array.
- `.storybook/main.ts` and `.storybook/plugins/preset.js` use the Storybook 8-compatible config shape.
- `.storybook/manager.ts` and `.storybook/plugins/iframe.js` use the Storybook 8 manager package imports.

Lightweight verification run on June 2, 2026:

- `CI=true npx -y pnpm@10.19.0 install --frozen-lockfile`
- `CI=true STORYBOOK_DISABLE_TELEMETRY=1 npx -y pnpm@10.19.0 exec storybook dev -p 6109 --ci --no-open --exact-port --disable-telemetry`

The Storybook dev server reached the ready state on `http://localhost:6109/`.
Port `3001` was not used during verification because it was already occupied by a local `next-server` process.
