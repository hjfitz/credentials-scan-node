"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const util_1 = require("./util");
const config_1 = __importDefault(require("./config"));
const scanFile = (resultsDS) => (file) => {
    const split = fs_1.default.readFileSync(file)
        .toString()
        .split('\n');
    const matches = config_1.default.patterns.rules.map(({ regex, description }) => {
        const ruleMatch = split
            .filter((line) => line.match(regex))
            .map((line, lineNo) => {
            const lineNumber = lineNo + 1;
            const result = { line, lineNumber, description };
            return result;
        });
        if (!ruleMatch.length)
            return false;
        return { file, matches: ruleMatch };
    }).filter(Boolean);
    // hacky cast as typescript doesn't registr .filter(Boolean)
    resultsDS.push(...matches);
};
function scanForKeys(repoDir) {
    const results = [];
    // this is hackery and I'm not sure if there is a race condition
    util_1.walk(repoDir, scanFile(results), config_1.default.dirsIgnored);
    const out = results.flat().filter(Boolean);
    // console.log(JSON.stringify(out, null, 2))
    return out;
}
scanForKeys('/home/hjf/git/credentials-scan-node');
module.exports = scanForKeys;
