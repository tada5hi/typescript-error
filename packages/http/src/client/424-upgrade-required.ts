import { BaseError, ErrorOptions } from "@typescript-error/core";

export class UpgradeRequired extends BaseError {
    constructor(message?: string, options?: ErrorOptions) {
        options = options ?? {};
        options.code = options.code ?? `UPGRADE_REQUIRED`;
        options.statusCode = options.statusCode ?? 424;

        message = message ?? `Upgrade Required`;

        super(message, options);
    }
}
