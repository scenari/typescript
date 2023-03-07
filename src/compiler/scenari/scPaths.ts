import * as path from "path";
import * as fs from "fs";
export const SC_WUI_SCHEME = "sc+wui:";

let searchDir = __dirname;
let wuiBootstrapDir: string | null = null;

while (!wuiBootstrapDir) {
    const testDir = path.resolve(searchDir, "Wui_Bootstrap");
    if (fs.existsSync(testDir)) wuiBootstrapDir = testDir;
    const newSearchDir = path.dirname(searchDir);
    if (newSearchDir == searchDir) break;
    searchDir = newSearchDir;
}
console.log(wuiBootstrapDir);



export function isScPath(path: string) {
    return path.startsWith(SC_WUI_SCHEME);
}

export function resolveScPath(path: string) {
    if (wuiBootstrapDir && path.startsWith(SC_WUI_SCHEME)) return wuiBootstrapDir + "/" + path.substring(SC_WUI_SCHEME.length);
    return path;
}
