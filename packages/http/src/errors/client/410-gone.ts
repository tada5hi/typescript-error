import {
    buildErrorOptions,
    determineErrorMessage,
    ErrorOptions,
    setUnsetErrorOptions
} from '@typescript-error/core';
import { ClientError } from '../base';

export class GoneError extends ClientError {
    constructor(data?: string | Error | ErrorOptions, options?: ErrorOptions) {
        options = setUnsetErrorOptions(
            buildErrorOptions(data, options),
            {
                code: `GONE`,
                statusCode: 410,
                decorateMessage: false,
                logMessage: false
            },
        );

        let message = determineErrorMessage(data, options);
        if (!message) {
            message = `Gone`;
        }

        super(message, options);
    }
}
