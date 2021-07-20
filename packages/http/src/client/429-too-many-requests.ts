import { BaseError, ErrorOptions } from "@typescript-error/core";

export class TooManyRequests extends BaseError {
    constructor(message?: string, options?: ErrorOptions) {
        options = options ?? {};
        options.code = options.code ?? `TOO_MANY_REQUESTS`;
        options.statusCode = options.statusCode ?? 429;

        message = message ?? `Too Many Requests`;

        super(message, options);
    }
}
