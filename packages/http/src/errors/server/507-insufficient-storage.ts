import {
    buildErrorOptions,
    determineErrorMessage,
    ErrorOptions,
    setUnsetErrorOptions
} from '@typescript-error/core';
import { ServerError } from '../base';

export class InsufficientStorageError extends ServerError {
    constructor(data?: string | Error | ErrorOptions, options?: ErrorOptions) {
        options = setUnsetErrorOptions(
            buildErrorOptions(data, options),
            {
                code: `INSUFFICIENT_STORAGE`,
                statusCode: 507,
                decorateMessage: true,
                logMessage: true
            },
        );

        let message = determineErrorMessage(data, options);
        if (!message) {
            message = `Insufficient Storage`;
        }

        super(message, options);
    }
}
