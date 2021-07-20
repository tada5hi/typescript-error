import { BaseError, ErrorOptions } from "@typescript-error/core";

export class GatewayTimeout extends BaseError {
    constructor(message?: string, options?: ErrorOptions) {
        options = options ?? {};
        options.code = options.code ?? `GATEWAY_TIMEOUT`;
        options.statusCode = options.statusCode ?? 504;

        message = message ?? `Gateway Timeout`;

        super(message, options);
    }
}
