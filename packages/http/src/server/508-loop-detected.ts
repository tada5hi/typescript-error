import { BaseError, ErrorOptions } from "@typescript-error/core";

export class LoopDetected extends BaseError {
    constructor(message?: string, options?: ErrorOptions) {
        options = options ?? {};
        options.code = options.code ?? `LOOP_DETECTED`;
        options.statusCode = options.statusCode ?? 508;

        message = message ?? `Loop Detected`;

        super(message, options);
    }
}
