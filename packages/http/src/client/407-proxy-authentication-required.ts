import { BaseError, ErrorOptions } from "@typescript-error/core";

export class ProxyAuthenticationRequired extends BaseError {
    constructor(message?: string, options?: ErrorOptions) {
        options = options ?? {};
        options.code = options.code ?? `PROXY_AUTHENTICATION_REQUIRED`;
        options.statusCode = options.statusCode ?? 407;

        message = message ?? `Proxy Authentication Required`;

        super(message, options);
    }
}
