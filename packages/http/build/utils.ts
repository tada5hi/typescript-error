import fs from 'fs';
import path from 'path';

/**
 * Save file with promise api.
 *
 * @param content
 * @param filePath
 */
export async function saveFile(content: string, filePath: string): Promise<void> {
    return new Promise(((resolve: (value?: any) => void, reject) => {
        fs.writeFile(filePath, content, (err: Error) => {
            if (err) reject(err);

            resolve();
        });
    }));
}

/**
 * Load template (.tpl) file from disk.
 * @param file
 */
export async function loadTemplate(file: string): Promise<string> {
    const tplPath: string = path.isAbsolute(file) ?
        file :
        path.join(__dirname, '..', 'template', file);

    return new Promise((resolve: (data: string) => void, reject) => {
        fs.readFile(tplPath, ({ encoding: 'utf-8' }), (err: Error, data: string) => {
            if (err) reject(err);

            resolve(data);
        });
    });
}

export function hasOwnProperty<X extends Record<string, any>, Y extends PropertyKey>(obj: X, prop: Y): obj is X & Record<Y, unknown> {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}
