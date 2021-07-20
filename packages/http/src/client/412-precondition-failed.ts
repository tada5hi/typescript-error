import { BaseError, ErrorOptions } from "@typescript-error/core";

export class PreconditionFailed extends BaseError {
    constructor(message?: string, options?: ErrorOptions) {
        options = options ?? {};
        options.code = options.code ?? `PRECONDITION_FAILED`;
        options.statusCode = options.statusCode ?? 412;

        message = message ?? `Precondition Failed`;

        super(message, options);
    }
}
