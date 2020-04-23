"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const patterns_1 = __importDefault(require("./patterns"));
const config = {
    patterns: patterns_1.default,
    violatingFileExtensions: [
        ".der",
        ".pem",
        ".crt",
        ".cer",
        ".p12",
        ".pfx",
        ".key"
    ],
    dirsIgnored: [
        'node_modules',
        '.cache',
        '.git',
        'package-lock.json',
        'yarn.lock',
        'check-for-creds/patterns.js'
    ]
};
exports.default = config;
//# sourceMappingURL=config.js.map