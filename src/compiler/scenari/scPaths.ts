import * as fs from "fs";
import * as path from "path";
export const SC_WUI_SCHEME = "sc+wui:";
export const SC_MODEL_TSCONFIG = "tsconfig.model.json";

let searchDir = __dirname;
let wuiRootDir: string | undefined;

while (!wuiRootDir) {
    const testFile = path.resolve(searchDir, SC_MODEL_TSCONFIG);
    if (fs.existsSync(testFile)) wuiRootDir = searchDir;
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
