import { BaseError, ErrorOptions } from "@typescript-error/core";

export class UnsupportedMediaType extends BaseError {
    constructor(message?: string, options?: ErrorOptions) {
        options = options ?? {};
        options.code = options.code ?? `UNSUPPORTED_MEDIA_TYPE`;
        options.statusCode = options.statusCode ?? 415;

        message = message ?? `Unsupported Media Type`;

        super(message, options);
    }
}
