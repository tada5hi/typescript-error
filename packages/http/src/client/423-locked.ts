import { BaseError, ErrorOptions } from "@typescript-error/core";

export class Locked extends BaseError {
    constructor(message?: string, options?: ErrorOptions) {
        options = options ?? {};
        options.code = options.code ?? `LOCKED`;
        options.statusCode = options.statusCode ?? 423;

        message = message ?? `Locked`;

        super(message, options);
    }
}
