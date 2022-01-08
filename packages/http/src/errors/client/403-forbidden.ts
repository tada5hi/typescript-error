import { ErrorOptions } from '@typescript-error/core';
import { ClientError } from '../base';

export class ForbiddenError extends ClientError {
    constructor(data?: string | Error, options?: ErrorOptions) {
        options = options ?? {};
        options.code = options.code ?? `FORBIDDEN`;
        options.statusCode = options.statusCode ?? 403;
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
                message = `Forbidden`;
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
