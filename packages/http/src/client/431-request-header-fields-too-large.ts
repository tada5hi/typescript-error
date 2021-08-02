import { BaseError, ErrorOptions } from "@typescript-error/core";

export class RequestHeaderFieldsTooLarge extends BaseError {
    constructor(data?: string | Error, options?: ErrorOptions) {
        options = options ?? {};
        options.code = options.code ?? `REQUEST_HEADER_FIELDS_TOO_LARGE`;
        options.statusCode = options.statusCode ?? 431;
        options.decorateMessage = options.decorateMessage ?? false;
        options.logMessage = options.logMessage ?? false

        let message : string | undefined = typeof data === 'string' ? data : undefined;
        if(!message) {
            if(
                data instanceof Error &&
                !options.decorateMessage
            ) {
                message = data.message;
            } else {
                message = `Request Header Fields Too Large`;
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
