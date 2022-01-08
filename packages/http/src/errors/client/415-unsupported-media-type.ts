import {
    buildErrorOptions,
    determineErrorMessage,
    ErrorOptions,
    setUnsetErrorOptions
} from '@typescript-error/core';
import { ClientError } from '../base';

export class UnsupportedMediaTypeError extends ClientError {
    constructor(data?: string | Error | ErrorOptions, options?: ErrorOptions) {
        options = setUnsetErrorOptions(
            buildErrorOptions(data, options),
            {
                code: `UNSUPPORTED_MEDIA_TYPE`,
                statusCode: 415,
                decorateMessage: false,
                logMessage: false
            },
        );

        let message = determineErrorMessage(data, options);
        if (!message) {
            message = `Unsupported Media Type`;
        }

        super(message, options);
    }
}
