import { BaseError, ErrorOptions } from "@typescript-error/core";

export class RequestHeaderFieldsTooLarge extends BaseError {
    constructor(message?: string, options?: ErrorOptions) {
        options = options ?? {};
        options.code = options.code ?? `REQUEST_HEADER_FIELDS_TOO_LARGE`;
        options.statusCode = options.statusCode ?? 431;

        message = message ?? `Request Header Fields Too Large`;

        super(message, options);
    }
}
