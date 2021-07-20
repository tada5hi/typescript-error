import { BaseError, ErrorOptions } from "@typescript-error/core";

export class BandwidthLimitExceeded extends BaseError {
    constructor(message?: string, options?: ErrorOptions) {
        options = options ?? {};
        options.code = options.code ?? `BANDWIDTH_LIMIT_EXCEEDED`;
        options.statusCode = options.statusCode ?? 509;

        message = message ?? `Bandwidth Limit Exceeded`;

        super(message, options);
    }
}
