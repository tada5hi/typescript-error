import {
    buildErrorOptions,
    determineErrorMessage,
    ErrorOptions,
    setUnsetErrorOptions
} from '@typescript-error/core';
import { ServerError } from '../base';

export class VariantAlsoNegotiatesError extends ServerError {
    constructor(data?: string | Error | ErrorOptions, options?: ErrorOptions) {
        options = setUnsetErrorOptions(
            buildErrorOptions(data, options),
            {
                code: `VARIANT_ALSO_NEGOTIATES`,
                statusCode: 506,
                decorateMessage: true,
                logMessage: true
            },
        );

        let message = determineErrorMessage(data, options);
        if (!message) {
            message = `Variant Also Negotiates`;
        }

        super(message, options);
    }
}
