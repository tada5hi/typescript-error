import { BaseError, ErrorOptions } from "@typescript-error/core";

export class NotImplemented extends BaseError {
    constructor(message?: string, options?: ErrorOptions) {
        options = options ?? {};
        options.code = options.code ?? `NOT_IMPLEMENTED`;
        options.statusCode = options.statusCode ?? 501;

        message = message ?? `Not Implemented`;

        super(message, options);
    }
}
