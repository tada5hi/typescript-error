import { ErrorOptions } from '@typescript-error/core';
import { ClientError } from '../base';

export class PreconditionRequiredError extends ClientError {
    constructor(data?: string | Error, options?: ErrorOptions) {
        options = options ?? {};
        options.code = options.code ?? `PRECONDITION_REQUIRED`;
        options.statusCode = options.statusCode ?? 428;
        options.decorateMessage = options.decorateMessage ?? false;
        options.logMessage = options.logMessage ?? false;

        let message : string | undefined = typeof data === 'string' ? data : undefined;
        if (!message) {
            if (
                data instanceof Error &&
                !options.decorateMessage
            ) {
                message = data.message;
            } else {
                message = `Precondition Required`;
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
