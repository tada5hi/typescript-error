import { BaseError, ErrorOptions } from "@typescript-error/core";

export class BadRequest extends BaseError {
    constructor(message?: string, options?: ErrorOptions) {
        options = options ?? {};
        options.code = options.code ?? `BAD_REQUEST`;
        options.statusCode = options.statusCode ?? 400;

        message = message ?? `Bad Request`;

        super(message, options);
    }
}
