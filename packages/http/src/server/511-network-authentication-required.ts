import { BaseError, ErrorOptions } from "@typescript-error/core";

export class NetworkAuthenticationRequired extends BaseError {
    constructor(data?: string | Error, options?: ErrorOptions) {
        options = options ?? {};
        options.code = options.code ?? `NETWORK_AUTHENTICATION_REQUIRED`;
        options.statusCode = options.statusCode ?? 511;
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
                message = `Network Authentication Required`;
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
