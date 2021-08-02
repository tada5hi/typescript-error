import { BaseError, ErrorOptions } from "@typescript-error/core";

export class BlockedByWindowsParentalControls extends BaseError {
    constructor(data?: string | Error, options?: ErrorOptions) {
        options = options ?? {};
        options.code = options.code ?? `BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS`;
        options.statusCode = options.statusCode ?? 450;
        options.decorateMessage = options.decorateMessage ?? false;
        options.logMessage = options.logMessage ?? false

        let message : string | undefined = typeof data === 'string' ? data : undefined;
        if(!message) {
            if(
                data instanceof Error &&
                !options.decorateMessage
            ) {
                message = data.message;
            } else {
                message = `Blocked By Windows Parental Controls`;
            }
        }

        if(
            !options.previous &&
            data instanceof Error
        ) {
            options.previous = data;
        }

        super(message, options);
    }
}
