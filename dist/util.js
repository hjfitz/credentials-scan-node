"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
/**
 * recursively walk a dir and invoke a callback on each
 * @example <caption>basic traversal</caption>
 * walk('/path/to/dir', console.log, ['node_modules'])
 * @param dir *absolute* directory to walk
 * @param {function} cb callback to invoke
 * @param {string[]} ignored list of dirs to ignore and not walk
 */
function walk(dirOrFile, cb, ignored = []) {
    if (!fs_1.default.existsSync(dirOrFile))
        return;
    // check to see if we are in the ignored list
    for (const subPath of ignored)
        if (dirOrFile.includes(subPath))
            return;
    const info = fs_1.default.statSync(dirOrFile);
    if (info.isDirectory()) {
        const contents = fs_1.default.readdirSync(dirOrFile);
        // use map as to not fuck with the callback stack
        contents.map((block) => walk(path_1.default.join(dirOrFile, block), cb, ignored));
    }
    else if (info.isFile()) {
        cb(dirOrFile);
    }
}
exports.walk = walk;
//# sourceMappingURL=util.js.map