import { BaseError, ErrorOptions } from "@typescript-error/core";

export class ClientClosedRequest extends BaseError {
    constructor(message?: string, options?: ErrorOptions) {
        options = options ?? {};
        options.code = options.code ?? `CLIENT_CLOSED_REQUEST`;
        options.statusCode = options.statusCode ?? 499;

        message = message ?? `Client Closed Request`;

        super(message, options);
    }
}
