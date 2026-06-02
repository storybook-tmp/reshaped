import { defineWorkspace } from "vitest/config";

export default defineWorkspace([
	{
		extends: "./vite.config.mjs",
		test: {
			name: "unit",
			isolate: false,
			include: ["./src/**/*.test.ts"],
		},
	},
]);
