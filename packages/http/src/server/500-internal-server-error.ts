import { BaseError, ErrorOptions } from "@typescript-error/core";

export class InternalServerError extends BaseError {
    constructor(message?: string, options?: ErrorOptions) {
        options = options ?? {};
        options.code = options.code ?? `INTERNAL_SERVER_ERROR`;
        options.statusCode = options.statusCode ?? 500;

        message = message ?? `Internal Server Error`;

        super(message, options);
    }
}
