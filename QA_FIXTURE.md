# Reshaped Agentic Review QA Fixture

Branch: `main`

Purpose: primary Agentic Review QA target for the PR canary from the
Chromatic QA guide, with Storybook Review and the MCP addon enabled.

Expected state:

- Storybook packages use `0.0.0-pr-35110-sha-eeba66b8`.
- `@storybook/addon-review` uses `0.0.0-pr-35110-sha-eeba66b8`.
- `@storybook/addon-mcp` uses `https://pkg.pr.new/storybookjs/mcp/@storybook/addon-mcp@559d54d`.
- `.storybook/main.ts` includes both `@storybook/addon-review` and
  `@storybook/addon-mcp` in the `addons` array.
- This branch is the happy-path fixture for manual Claude and Codex QA.

Canary setup commands:

- `npx -y storybook@0.0.0-pr-35110-sha-eeba66b8 upgrade --yes --package-manager pnpm --disable-telemetry`
- `npx -y pnpm@10.19.0 add -D -w @storybook/addon-review@0.0.0-pr-35110-sha-eeba66b8 @storybook/addon-mcp@https://pkg.pr.new/storybookjs/mcp/@storybook/addon-mcp@559d54d`

Lightweight verification run on June 22, 2026:

- `CI=true npx -y pnpm@10.19.0 install --frozen-lockfile`
- `CI=true STORYBOOK_DISABLE_TELEMETRY=1 npx -y pnpm@10.19.0 exec storybook dev -p 6106 --ci --no-open --exact-port --disable-telemetry`

Expected result: the Storybook dev server reaches the ready state, the MCP
runtime record reports ready, and Agentic Review can be exercised through the
real ADE flow.
