import { BaseError, ErrorOptions } from "@typescript-error/core";

export class RequestEntityTooLarge extends BaseError {
    constructor(message?: string, options?: ErrorOptions) {
        options = options ?? {};
        options.code = options.code ?? `REQUEST_ENTITY_TOO_LARGE`;
        options.statusCode = options.statusCode ?? 413;

        message = message ?? `REQUEST_ENTITY_TOO_LARGE`;

        super(message, options);
    }
}
