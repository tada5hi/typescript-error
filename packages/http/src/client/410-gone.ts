import { BaseError, ErrorOptions } from "@typescript-error/core";

export class Gone extends BaseError {
    constructor(message?: string, options?: ErrorOptions) {
        options = options ?? {};
        options.code = options.code ?? `GONE`;
        options.statusCode = options.statusCode ?? 410;

        message = message ?? `Gone`;

        super(message, options);
    }
}
