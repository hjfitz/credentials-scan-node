/**
 * recursively walk a dir and invoke a callback on each
 * @example <caption>basic traversal</caption>
 * walk('/path/to/dir', console.log, ['node_modules'])
 * @param dir *absolute* directory to walk
 * @param {function} cb callback to invoke
 * @param {string[]} ignored list of dirs to ignore and not walk
 */
export declare function walk(dirOrFile: string, cb: Function, ignored?: string[]): void;
//# sourceMappingURL=util.d.ts.map