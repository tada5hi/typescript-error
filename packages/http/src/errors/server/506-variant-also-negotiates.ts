import { ErrorOptions } from '@typescript-error/core';
import { ServerError } from '../base';

export class VariantAlsoNegotiatesError extends ServerError {
    constructor(data?: string | Error, options?: ErrorOptions) {
        options = options ?? {};
        options.code = options.code ?? 'VARIANT_ALSO_NEGOTIATES';
        options.statusCode = options.statusCode ?? 506;
        options.decorateMessage = options.decorateMessage ?? true;
        options.logMessage = options.logMessage ?? true;

        let message : string | undefined = typeof data === 'string' ? data : undefined;
        if (!message) {
            if (
                data instanceof Error &&
                !options.decorateMessage
            ) {
                message = data.message;
            } else {
                message = 'Variant Also Negotiates';
            }
        }

        if (
            !options.previous &&
            data instanceof Error
        ) {
            options.previous = data;
        }

        super(message, options);
    }
}
