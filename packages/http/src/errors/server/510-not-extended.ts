import {
    buildErrorOptions,
    determineErrorMessage,
    ErrorOptions,
    setUnsetErrorOptions
} from '@typescript-error/core';
import { ServerError } from '../base';

export class NotExtendedError extends ServerError {
    constructor(data?: string | Error | ErrorOptions, options?: ErrorOptions) {
        options = setUnsetErrorOptions(
            buildErrorOptions(data, options),
            {
                code: `NOT_EXTENDED`,
                statusCode: 510,
                decorateMessage: true,
                logMessage: true
            },
        );

        let message = determineErrorMessage(data, options);
        if (!message) {
            message = `Not Extended`;
        }

        super(message, options);
    }
}
