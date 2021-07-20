import { BaseError, ErrorOptions } from "@typescript-error/core";

export class PreconditionRequired extends BaseError {
    constructor(message?: string, options?: ErrorOptions) {
        options = options ?? {};
        options.code = options.code ?? `PRECONDITION_REQUIRED`;
        options.statusCode = options.statusCode ?? 428;

        message = message ?? `Precondition Required`;

        super(message, options);
    }
}
