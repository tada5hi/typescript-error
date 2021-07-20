import { BaseError, ErrorOptions } from "@typescript-error/core";

export class ExpectationFailed extends BaseError {
    constructor(message?: string, options?: ErrorOptions) {
        options = options ?? {};
        options.code = options.code ?? `EXPECTATION_FAILED`;
        options.statusCode = options.statusCode ?? 417;

        message = message ?? `Expectation Failed`;

        super(message, options);
    }
}
