import { BaseError, ErrorOptions } from "@typescript-error/core";

export class HTTPVersionNotSupported extends BaseError {
    constructor(message?: string, options?: ErrorOptions) {
        options = options ?? {};
        options.code = options.code ?? `HTTP_VERSION_NOT_SUPPORTED`;
        options.statusCode = options.statusCode ?? 505;

        message = message ?? `HTTP Version Not Supported`;

        super(message, options);
    }
}
