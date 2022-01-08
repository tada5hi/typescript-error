import {
    buildErrorOptions,
    determineErrorMessage,
    ErrorOptions,
    setUnsetErrorOptions
} from '@typescript-error/core';
import { ClientError } from '../base';

export class RequestedRangeNotSatisfiableError extends ClientError {
    constructor(data?: string | Error | ErrorOptions, options?: ErrorOptions) {
        options = setUnsetErrorOptions(
            buildErrorOptions(data, options),
            {
                code: `REQUESTED_RANGE_NOT_SATISFIABLE`,
                statusCode: 416,
                decorateMessage: false,
                logMessage: false
            },
        );

        let message = determineErrorMessage(data, options);
        if (!message) {
            message = `Requested Range Not Satisfiable`;
        }

        super(message, options);
    }
}
