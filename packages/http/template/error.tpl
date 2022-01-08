import {
    buildErrorOptions,
    determineErrorMessage,
    ErrorOptions,
    setUnsetErrorOptions
} from '@typescript-error/core';
import { {{baseClass}} } from '../base';

export class {{{class}}} extends {{baseClass}} {
    constructor(data?: string | Error | ErrorOptions, options?: ErrorOptions) {
        options = setUnsetErrorOptions(
            buildErrorOptions(data, options),
            {
                code: `{{code}}`,
                statusCode: {{statusCode}},
                decorateMessage: {{{decorateMessage}}},
                logMessage: {{{logMessage}}}
            },
        );

        let message = determineErrorMessage(data, options);
        if (!message) {
            message = `{{{message}}}`;
        }

        super(message, options);
    }
}
