import { BaseError, ErrorOptions } from "@typescript-error/core";

export class ImATeapot extends BaseError {
    constructor(message?: string, options?: ErrorOptions) {
        options = options ?? {};
        options.code = options.code ?? `IM_A_TEAPOT`;
        options.statusCode = options.statusCode ?? 418;

        message = message ?? `I'm a Teapot`;

        super(message, options);
    }
}
