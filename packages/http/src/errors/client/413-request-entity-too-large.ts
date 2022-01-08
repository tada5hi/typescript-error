import {
    buildErrorOptions,
    determineErrorMessage,
    ErrorOptions,
    setUnsetErrorOptions
} from '@typescript-error/core';
import { ClientError } from '../base';

export class RequestEntityTooLargeError extends ClientError {
    constructor(data?: string | Error | ErrorOptions, options?: ErrorOptions) {
        options = setUnsetErrorOptions(
            buildErrorOptions(data, options),
            {
                code: `REQUEST_ENTITY_TOO_LARGE`,
                statusCode: 413,
                decorateMessage: false,
                logMessage: false
            },
        );

        let message = determineErrorMessage(data, options);
        if (!message) {
            message = `REQUEST_ENTITY_TOO_LARGE`;
        }

        super(message, options);
    }
}
