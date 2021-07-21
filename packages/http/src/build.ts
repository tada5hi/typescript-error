import path from 'path';
import fs from 'fs';

import {render} from 'mustache';
import {ClientErrorOptions, ServerErrorOptions} from "./config";

type TemplateClientBuildType = 'client';
type TemplateServerBuildType = 'server';
type TemplateBuildType = TemplateClientBuildType | TemplateServerBuildType;

export async function buildErrors(type: TemplateBuildType) {
    const tpl = await loadTemplate();

    const destDirPath = path.join(__dirname + '/' + type);

    const fileNames : string[] = [];
    const mapping : Record<string, {code: string, statusCode: number, message: string}> = type === 'client' ? ClientErrorOptions : ServerErrorOptions;

    for(let key in mapping) {
        const fileName = mapping[key].statusCode + '-' + (mapping[key].code).toLowerCase().replaceAll('_','-')+'.ts';
        const destFilePath : string = path.join(destDirPath + '/' + fileName);

        const content = render(tpl, {
            namespaceFile: 'index.ts',
            class: key,
            ...mapping[key]
        });

        await saveFile(content, destFilePath);

        fileNames.push(fileName);
    }

    const content : string = fileNames.map(fileName => {
        const parts = fileName.split('.')
        parts.pop();

        return `export * from "./${parts.join('.')}";`;
    }).reduce((prev, current) => prev+"\n"+current);

    const destFilePath : string = path.join(destDirPath + '/index.ts');
    await saveFile(content, destFilePath);
}

export async function saveFile(content: string, filePath: string) : Promise<void> {
    return new Promise(((resolve: (value?: any) => void, reject) => {
        return fs.writeFile(filePath, content, (err: Error) => {
            if(err) reject(err);

            resolve();
        })
    }))
}

async function loadTemplate() : Promise<string> {
    const tplPath : string = path.join(__dirname + '/../template/error.tpl');

    return new Promise((resolve: (data: string) => void, reject) => {
        return fs.readFile(tplPath, ({encoding: 'utf-8'}), (err: Error, data: string) => {
            if(err) reject(err);

            resolve(data);
        })
    })
}
