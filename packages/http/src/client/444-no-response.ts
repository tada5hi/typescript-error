import { BaseError, ErrorOptions } from "@typescript-error/core";

export class NoResponse extends BaseError {
    constructor(message?: string, options?: ErrorOptions) {
        options = options ?? {};
        options.code = options.code ?? `NO_RESPONSE`;
        options.statusCode = options.statusCode ?? 444;

        message = message ?? `No Response`;

        super(message, options);
    }
}
