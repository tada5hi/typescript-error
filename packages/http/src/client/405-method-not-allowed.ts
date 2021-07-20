import { BaseError, ErrorOptions } from "@typescript-error/core";

export class MethodNotAllowed extends BaseError {
    constructor(message?: string, options?: ErrorOptions) {
        options = options ?? {};
        options.code = options.code ?? `METHOD_NOT_ALLOWED`;
        options.statusCode = options.statusCode ?? 405;

        message = message ?? `Method Not Allowed`;

        super(message, options);
    }
}
