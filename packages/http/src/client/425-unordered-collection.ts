import { BaseError, ErrorOptions } from "@typescript-error/core";

export class UnorderedCollection extends BaseError {
    constructor(message?: string, options?: ErrorOptions) {
        options = options ?? {};
        options.code = options.code ?? `UNORDERED_COLLECTION`;
        options.statusCode = options.statusCode ?? 425;

        message = message ?? `Unordered Collection`;

        super(message, options);
    }
}
