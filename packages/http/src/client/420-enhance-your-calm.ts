import { BaseError, ErrorOptions } from "@typescript-error/core";

export class EnhanceYourCalm extends BaseError {
    constructor(message?: string, options?: ErrorOptions) {
        options = options ?? {};
        options.code = options.code ?? `ENHANCE_YOUR_CALM`;
        options.statusCode = options.statusCode ?? 420;

        message = message ?? `Enhance Your Calm`;

        super(message, options);
    }
}
