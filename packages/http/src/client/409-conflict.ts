import { BaseError, ErrorOptions } from "@typescript-error/core";

export class Conflict extends BaseError {
    constructor(message?: string, options?: ErrorOptions) {
        options = options ?? {};
        options.code = options.code ?? `CONFLICT`;
        options.statusCode = options.statusCode ?? 409;

        message = message ?? `Conflict`;

        super(message, options);
    }
}
