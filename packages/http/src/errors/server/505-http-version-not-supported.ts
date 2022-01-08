import { ErrorOptions } from '@typescript-error/core';
import { ServerError } from '../base';

export class HTTPVersionNotSupportedError extends ServerError {
    constructor(data?: string | Error, options?: ErrorOptions) {
        options = options ?? {};
        options.code = options.code ?? `HTTP_VERSION_NOT_SUPPORTED`;
        options.statusCode = options.statusCode ?? 505;
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
                message = `HTTP Version Not Supported`;
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
