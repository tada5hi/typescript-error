import {render} from 'mustache';
import path from 'path';
import {ClientErrorOptions, ServerErrorOptions} from "../config";
import {loadTemplate, saveFile} from "./utils";

type TemplateClientBuildType = 'client';
type TemplateServerBuildType = 'server';
type TemplateBuildType = TemplateClientBuildType | TemplateServerBuildType;

export async function buildErrors(type: TemplateBuildType) {
    const tpl = await loadTemplate('error.tpl');

    const destDirPath = path.join(__dirname, '..', type);

    const items : {fileName: string, className: string, classErrorSuffix: boolean}[] = [];
    const mapping : Record<string, {code: string, statusCode: number, message: string}> = type === 'client' ? ClientErrorOptions : ServerErrorOptions;

    for(let key in mapping) {
        const fileName : string = mapping[key].statusCode + '-' + (mapping[key].code).toLowerCase().replaceAll('_','-')+'.ts';
        const destFilePath : string = path.join(destDirPath + '/' + fileName);

        let className : string = key;

        const classErrorSuffix : boolean = key.toLocaleLowerCase().endsWith('error');
        if(!classErrorSuffix) {
            className += 'Error';
        }

        const content = render(tpl, {
            namespaceFile: 'index.ts',
            decorateMessage: type === 'server',
            logMessage: type === 'server',
            class: className,
            ...mapping[key]
        });

        await saveFile(content, destFilePath);

        items.push({
            fileName,
            className,
            classErrorSuffix
        });
    }

    // default
    let content : string = items.map(item => {
        const parts = item.fileName.split('.')
        parts.pop();

        return `export * from "./${parts.join('.')}";`;
    }).reduce((prev, current) => prev+"\n"+current);

    let destFilePath : string = path.join(destDirPath + '/index.ts');
    await saveFile(content, destFilePath);

    // bundle
    const aliases : string[] = [];
    content = items
        .map(item => {
            const parts = item.fileName.split('.')
            parts.pop();

            const alias : string = item.classErrorSuffix ? item.className : item.className.substr(0, item.className.length - 5);

            aliases.push(alias);

            return `import {${item.className} as ${alias}} from "./${parts.join('.')}";`;
        })
        .reduce((prev, current) => prev+"\n"+current);
    content += `\n` + `export {\n\t${aliases.join(`,\n\t`)}\n};`

    destFilePath = path.join(destDirPath + '/aliases.ts');
    await saveFile(content, destFilePath);
}

