import { BaseError, ErrorOptions } from "@typescript-error/core";

export class InsufficientStorage extends BaseError {
    constructor(message?: string, options?: ErrorOptions) {
        options = options ?? {};
        options.code = options.code ?? `INSUFFICIENT_STORAGE`;
        options.statusCode = options.statusCode ?? 507;

        message = message ?? `Insufficient Storage`;

        super(message, options);
    }
}
