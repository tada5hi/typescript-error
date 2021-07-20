import { BaseError, ErrorOptions } from "@typescript-error/core";

export class NotFound extends BaseError {
    constructor(message?: string, options?: ErrorOptions) {
        options = options ?? {};
        options.code = options.code ?? `NOT_FOUND`;
        options.statusCode = options.statusCode ?? 404;

        message = message ?? `Not Found`;

        super(message, options);
    }
}
