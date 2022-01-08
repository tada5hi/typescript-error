import { ErrorOptions } from '@typescript-error/core';
import { {{baseClass}} } from '../base';

export class {{{class}}} extends {{baseClass}} {
    constructor(data?: string | Error, options?: ErrorOptions) {
        options = options ?? {};
        options.code = options.code ?? `{{code}}`;
        options.statusCode = options.statusCode ?? {{statusCode}};
        options.decorateMessage = options.decorateMessage ?? {{{decorateMessage}}};
        options.logMessage = options.logMessage ?? {{{logMessage}}}

        let message : string | undefined = typeof data === 'string' ? data : undefined;
        if(!message) {
            if(
                data instanceof Error &&
                !options.decorateMessage
            ) {
                message = data.message;
            } else {
                message = `{{{message}}}`;
            }
        }

        if(
            !options.previous &&
            data instanceof Error
        ) {
            options.previous = data;
        }

        super(message, options);
    }
}
