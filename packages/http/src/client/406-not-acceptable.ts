import { BaseError, ErrorOptions } from "@typescript-error/core";

export class NotAcceptable extends BaseError {
    constructor(message?: string, options?: ErrorOptions) {
        options = options ?? {};
        options.code = options.code ?? `NOT_ACCEPTABLE`;
        options.statusCode = options.statusCode ?? 406;

        message = message ?? `Not Acceptable`;

        super(message, options);
    }
}
