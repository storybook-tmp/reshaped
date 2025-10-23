import { fileURLToPath } from "node:url";

function managerEntries(entry = []) {
	return [...entry, fileURLToPath(import.meta.resolve("./iframe.js"))];
}

export default {
	managerEntries,
};
