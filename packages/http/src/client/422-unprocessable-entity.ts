import { BaseError, ErrorOptions } from "@typescript-error/core";

export class UnprocessableEntity extends BaseError {
    constructor(message?: string, options?: ErrorOptions) {
        options = options ?? {};
        options.code = options.code ?? `UNPROCESSABLE_ENTITY`;
        options.statusCode = options.statusCode ?? 422;

        message = message ?? `Unprocessable Entity`;

        super(message, options);
    }
}
