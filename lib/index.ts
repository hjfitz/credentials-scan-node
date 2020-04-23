import fs from 'fs'
import {walk} from './util'
import scannerConfig from './config';

interface RuleMatch {
    line: string;
    lineNumber: number;
    description: string;
}

interface ScanResult {
    matches: RuleMatch[];
    file: string;
}

type ScanResults = (ScanResult| false)[]
type RuleMatches = RuleMatch[] | undefined




const scanFile = (resultsDS: ScanResult[]) => (file: string): void => {
    const split: string[] = fs.readFileSync(file)
        .toString()
        .split('\n')

    const matches: ScanResults  = scannerConfig.patterns.rules.map(({ regex, description }) => {


        const ruleMatch: RuleMatch[] = split
            .filter((line) => line.match(regex))
            .map((line, lineNo) => {
                const lineNumber = lineNo + 1    
                const result: RuleMatch = { line, lineNumber, description }
                return result
            })


        if (!ruleMatch.length) return false
        return { file, matches: ruleMatch }
    }).filter(Boolean)

    // hacky cast as typescript doesn't registr .filter(Boolean)
    resultsDS.push(...matches as ScanResult[])
}

export default function scanForKeys(repoDir: string): ScanResult[] {
    const results = [] as ScanResult[]
    // this is hackery and I'm not sure if there is a race condition
    walk(repoDir, scanFile(results), scannerConfig.dirsIgnored)
    const out = results.flat().filter(Boolean)
    console.log(JSON.stringify(out, null, 2))
    return out
}

scanForKeys('/home/hjf/git/credentials-scan-node')