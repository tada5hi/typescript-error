import {
    buildErrorOptions,
    determineErrorMessage,
    ErrorOptions,
    setUnsetErrorOptions
} from '@typescript-error/core';
import { ServerError } from '../base';

export class NetworkAuthenticationRequiredError extends ServerError {
    constructor(data?: string | Error | ErrorOptions, options?: ErrorOptions) {
        options = setUnsetErrorOptions(
            buildErrorOptions(data, options),
            {
                code: `NETWORK_AUTHENTICATION_REQUIRED`,
                statusCode: 511,
                decorateMessage: true,
                logMessage: true
            },
        );

        let message = determineErrorMessage(data, options);
        if (!message) {
            message = `Network Authentication Required`;
        }

        super(message, options);
    }
}
