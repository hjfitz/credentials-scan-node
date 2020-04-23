interface Rule {
    description: string;
    tags: string[];
    regex: RegExp;
}
export interface Ruleset {
    rules: Rule[];
}
declare const ruleset: Ruleset;
export default ruleset;
//# sourceMappingURL=patterns.d.ts.map