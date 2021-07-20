import { BaseError, ErrorOptions } from "@typescript-error/core";

export class NetworkAuthenticationRequired extends BaseError {
    constructor(message?: string, options?: ErrorOptions) {
        options = options ?? {};
        options.code = options.code ?? `NETWORK_AUTHENTICATION_REQUIRED`;
        options.statusCode = options.statusCode ?? 511;

        message = message ?? `Network Authentication Required`;

        super(message, options);
    }
}
