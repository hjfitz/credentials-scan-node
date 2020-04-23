import fs from 'fs'
import path from 'path';


/**
 * recursively walk a dir and invoke a callback on each
 * @example <caption>basic traversal</caption>
 * walk('/path/to/dir', console.log, ['node_modules'])
 * @param dir *absolute* directory to walk
 * @param {function} cb callback to invoke
 * @param {string[]} ignored list of dirs to ignore and not walk
 */
export function walk(dirOrFile: string, cb: Function, ignored: string[] = []): void {
    if (!fs.existsSync(dirOrFile)) return
    // check to see if we are in the ignored list
    for (const subPath of ignored)
        if (dirOrFile.includes(subPath)) return

    const info: fs.Stats = fs.statSync(dirOrFile)
    if (info.isDirectory()) {
        const contents: string[] = fs.readdirSync(dirOrFile)
        // use map as to not fuck with the callback stack
        contents.map((block: string) => walk(path.join(dirOrFile, block), cb, ignored))
    } else if (info.isFile()) {
        cb(dirOrFile)
    }
}


