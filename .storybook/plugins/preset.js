import { fileURLToPath } from "node:url";

const iframeEntry = fileURLToPath(new URL("./iframe.js", import.meta.url));

function managerEntries(entry = []) {
	return [...entry, iframeEntry];
}

export default {
	managerEntries,
};
