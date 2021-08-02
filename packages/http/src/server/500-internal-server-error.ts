import { BaseError, ErrorOptions } from "@typescript-error/core";

export class InternalServerError extends BaseError {
    constructor(data?: string | Error, options?: ErrorOptions) {
        options = options ?? {};
        options.code = options.code ?? `INTERNAL_SERVER_ERROR`;
        options.statusCode = options.statusCode ?? 500;
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
                message = `Internal Server Error`;
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
