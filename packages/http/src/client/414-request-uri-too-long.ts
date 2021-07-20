import { BaseError, ErrorOptions } from "@typescript-error/core";

export class RequestURITooLong extends BaseError {
    constructor(message?: string, options?: ErrorOptions) {
        options = options ?? {};
        options.code = options.code ?? `REQUEST_URI_TOO_LONG`;
        options.statusCode = options.statusCode ?? 414;

        message = message ?? `Request-URI Too Long`;

        super(message, options);
    }
}
