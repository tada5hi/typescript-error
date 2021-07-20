import { BaseError, ErrorOptions } from "@typescript-error/core";

export class RetryWith extends BaseError {
    constructor(message?: string, options?: ErrorOptions) {
        options = options ?? {};
        options.code = options.code ?? `RETRY_WITH`;
        options.statusCode = options.statusCode ?? 449;

        message = message ?? `Retry With`;

        super(message, options);
    }
}
