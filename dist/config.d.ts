import { Ruleset } from './patterns';
interface Config {
    patterns: Ruleset;
    violatingFileExtensions: string[];
    dirsIgnored: string[];
}
declare const config: Config;
export default config;
//# sourceMappingURL=config.d.ts.map