import * as fs from "fs";
import * as path from "path";
export const SC_WUI_SCHEME = "sc+wui:";

let searchDir = __dirname;
let wuiRootDir: string | undefined;

while (!wuiRootDir) {
    const testDir = path.resolve(searchDir, "Wui_Bootstrap");
    if (fs.existsSync(testDir)) wuiRootDir = testDir;
    const newSearchDir = path.dirname(searchDir);
    if (newSearchDir === searchDir) break;
    searchDir = newSearchDir;
}

export function isScPath(path: string) {
    return path.startsWith(SC_WUI_SCHEME);
}

export function resolveScPath(path: string) {
    if (wuiRootDir && path.startsWith(SC_WUI_SCHEME)) return wuiRootDir + "/" + path.substring(SC_WUI_SCHEME.length);
    return path;
}
