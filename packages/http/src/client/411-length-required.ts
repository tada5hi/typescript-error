import { BaseError, ErrorOptions } from "@typescript-error/core";

export class LengthRequired extends BaseError {
    constructor(message?: string, options?: ErrorOptions) {
        options = options ?? {};
        options.code = options.code ?? `LENGTH_REQUIRED`;
        options.statusCode = options.statusCode ?? 411;

        message = message ?? `Length Required`;

        super(message, options);
    }
}
