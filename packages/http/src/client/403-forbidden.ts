import { BaseError, ErrorOptions } from "@typescript-error/core";

export class Forbidden extends BaseError {
    constructor(message?: string, options?: ErrorOptions) {
        options = options ?? {};
        options.code = options.code ?? `FORBIDDEN`;
        options.statusCode = options.statusCode ?? 403;

        message = message ?? `Forbidden`;

        super(message, options);
    }
}
