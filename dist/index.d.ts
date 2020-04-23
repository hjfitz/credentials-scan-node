interface RuleMatch {
    line: string;
    lineNumber: number;
    description: string;
}
interface ScanResult {
    matches: RuleMatch[];
    file: string;
}
export default function scanForKeys(repoDir: string): ScanResult[];
export {};
//# sourceMappingURL=index.d.ts.map