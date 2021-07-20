import { BaseError, ErrorOptions } from "@typescript-error/core";

export class BadGateway extends BaseError {
    constructor(message?: string, options?: ErrorOptions) {
        options = options ?? {};
        options.code = options.code ?? `BAD_GATEWAY`;
        options.statusCode = options.statusCode ?? 502;

        message = message ?? `Bad Gateway`;

        super(message, options);
    }
}
