import { BaseError, ErrorOptions } from "@typescript-error/core";

export class BlockedByWindowsParentalControls extends BaseError {
    constructor(message?: string, options?: ErrorOptions) {
        options = options ?? {};
        options.code = options.code ?? `BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS`;
        options.statusCode = options.statusCode ?? 450;

        message = message ?? `Blocked By Windows Parental Controls`;

        super(message, options);
    }
}
