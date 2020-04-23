import patterns, {Ruleset} from './patterns'

interface Config {
    patterns: Ruleset;
    violatingFileExtensions: string[];
    dirsIgnored: string[];
}

const config: Config = {
    patterns,
    violatingFileExtensions: [ // do not upload these files
        ".der",
        ".pem",
        ".crt",
        ".cer",
        ".p12",
        ".pfx",
        ".key"
    ],
    dirsIgnored: [ // wasted cpu cycles
        'node_modules',
        '.cache',
        '.git',
        'package-lock.json',
        'yarn.lock',
        'check-for-creds/patterns.js'
    ]
}

export default config