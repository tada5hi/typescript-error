import { BaseError, ErrorOptions } from "@typescript-error/core";

export class ServiceUnavailable extends BaseError {
    constructor(message?: string, options?: ErrorOptions) {
        options = options ?? {};
        options.code = options.code ?? `SERVICE_UNAVAILABLE`;
        options.statusCode = options.statusCode ?? 503;

        message = message ?? `Service Unavailable`;

        super(message, options);
    }
}
