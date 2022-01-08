import {
    buildErrorOptions,
    determineErrorMessage,
    ErrorOptions,
    setUnsetErrorOptions
} from '@typescript-error/core';
import { ServerError } from '../base';

export class NotImplementedError extends ServerError {
    constructor(data?: string | Error | ErrorOptions, options?: ErrorOptions) {
        options = setUnsetErrorOptions(
            buildErrorOptions(data, options),
            {
                code: `NOT_IMPLEMENTED`,
                statusCode: 501,
                decorateMessage: true,
                logMessage: true
            },
        );

        let message = determineErrorMessage(data, options);
        if (!message) {
            message = `Not Implemented`;
        }

        super(message, options);
    }
}
