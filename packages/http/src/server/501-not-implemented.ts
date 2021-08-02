import { BaseError, ErrorOptions } from "@typescript-error/core";

export class NotImplemented extends BaseError {
    constructor(data?: string | Error, options?: ErrorOptions) {
        options = options ?? {};
        options.code = options.code ?? `NOT_IMPLEMENTED`;
        options.statusCode = options.statusCode ?? 501;
        options.decorateMessage = options.decorateMessage ?? true;
        options.logMessage = options.logMessage ?? true

        let message : string | undefined = typeof data === 'string' ? data : undefined;
        if(!message) {
            if(
                data instanceof Error &&
                !options.decorateMessage
            ) {
                message = data.message;
            } else {
                message = `Not Implemented`;
            }
        }

        if(
            !options.previous &&
            data instanceof Error
        ) {
            options.previous = data;
        }

        super(message, options);
    }
}
