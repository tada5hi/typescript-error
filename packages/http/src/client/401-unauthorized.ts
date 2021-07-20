import { BaseError, ErrorOptions } from "@typescript-error/core";

export class Unauthorized extends BaseError {
    constructor(message?: string, options?: ErrorOptions) {
        options = options ?? {};
        options.code = options.code ?? `UNAUTHORIZED`;
        options.statusCode = options.statusCode ?? 401;

        message = message ?? `Unauthorized`;

        super(message, options);
    }
}
