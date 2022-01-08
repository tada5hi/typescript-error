import { ErrorOptions } from '@typescript-error/core';
import { ClientError } from '../base';

export class RequestedRangeNotSatisfiableError extends ClientError {
    constructor(data?: string | Error, options?: ErrorOptions) {
        options = options ?? {};
        options.code = options.code ?? `REQUESTED_RANGE_NOT_SATISFIABLE`;
        options.statusCode = options.statusCode ?? 416;
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
                message = `Requested Range Not Satisfiable`;
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
