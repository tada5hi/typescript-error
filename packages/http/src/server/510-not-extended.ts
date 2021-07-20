import { BaseError, ErrorOptions } from "@typescript-error/core";

export class NotExtended extends BaseError {
    constructor(message?: string, options?: ErrorOptions) {
        options = options ?? {};
        options.code = options.code ?? `NOT_EXTENDED`;
        options.statusCode = options.statusCode ?? 510;

        message = message ?? `Not Extended`;

        super(message, options);
    }
}
