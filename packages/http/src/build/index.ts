import {render} from 'mustache';
import path from 'path';
import {ClientErrorSettings, ServerErrorSettings} from "../config";
import {ErrorSetting} from "../config";
import {hasOwnProperty, loadTemplate, saveFile} from "./utils";

/**
 * Generate client and server errors.
 */
export async function generateErrors() : Promise<void> {
    const settings : Record<string, ErrorSetting> = {
        ...ClientErrorSettings,
        ...ServerErrorSettings
    };

    const destDirPath = path.join(__dirname, '..', 'errors');
    const items : { fileName: string, isServerError: boolean }[] = [];

    const tpl = await loadTemplate('error.tpl');

    for(let key in settings) {
        const isServerError : boolean = hasOwnProperty(ServerErrorSettings, key);

        const pathSuffix : string = isServerError ? 'server' : 'client';

        const fileName : string = settings[key].statusCode + '-' + (settings[key].code).toLowerCase().replaceAll('_','-')+'.ts';
        const destFilePath : string = path.join(destDirPath, pathSuffix, fileName);

        let className : string = key;

        const classErrorSuffix : boolean = key.toLocaleLowerCase().endsWith('error');
        if(!classErrorSuffix) {
            className += 'Error';
        }

        const baseClassName : string = isServerError ? 'ServerError' : 'ClientError';

        const content = render(tpl, {
            namespaceFile: 'index.ts',
            decorateMessage: isServerError,
            logMessage: isServerError,
            class: className,
            baseClass: baseClassName,
            ...settings[key]
        });

        await saveFile(content, destFilePath);

        items.push({
            fileName,
            isServerError
        });
    }

    // default
    const lines : string[] = [
        `export * from "./base";`
    ];

    items.map(item => {
        const parts = item.fileName.split('.')
        parts.pop();

        const relativeDirectory : string = item.isServerError ? 'server' : 'client';
        lines.push(`export * from "./${relativeDirectory}/${parts.join('.')}";`);
    });

    let content : string = lines.join("\n");

    let destFilePath : string = path.join(destDirPath + '/index.ts');
    await saveFile(content, destFilePath);
}

