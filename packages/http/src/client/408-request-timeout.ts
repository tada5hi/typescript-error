import { BaseError, ErrorOptions } from "@typescript-error/core";

export class RequestTimeout extends BaseError {
    constructor(message?: string, options?: ErrorOptions) {
        options = options ?? {};
        options.code = options.code ?? `REQUEST_TIMEOUT`;
        options.statusCode = options.statusCode ?? 408;

        message = message ?? `Request Timeout`;

        super(message, options);
    }
}
