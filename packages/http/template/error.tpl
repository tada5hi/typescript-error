import { BaseError, ErrorOptions } from "@typescript-error/core";

export class {{{class}}} extends BaseError {
    constructor(message?: string, options?: ErrorOptions) {
        options = options ?? {};
        options.code = options.code ?? `{{code}}`;
        options.statusCode = options.statusCode ?? {{statusCode}};

        message = message ?? `{{{message}}}`;

        super(message, options);
    }
}
