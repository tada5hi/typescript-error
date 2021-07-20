import { BaseError, ErrorOptions } from "@typescript-error/core";

export class RequestedRangeNotSatisfiable extends BaseError {
    constructor(message?: string, options?: ErrorOptions) {
        options = options ?? {};
        options.code = options.code ?? `REQUESTED_RANGE_NOT_SATISFIABLE`;
        options.statusCode = options.statusCode ?? 416;

        message = message ?? `Requested Range Not Satisfiable`;

        super(message, options);
    }
}
