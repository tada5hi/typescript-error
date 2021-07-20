import { BaseError, ErrorOptions } from "@typescript-error/core";

export class FailedDependency extends BaseError {
    constructor(message?: string, options?: ErrorOptions) {
        options = options ?? {};
        options.code = options.code ?? `FAILED_DEPENDENCY`;
        options.statusCode = options.statusCode ?? 424;

        message = message ?? `Failed Dependency`;

        super(message, options);
    }
}
