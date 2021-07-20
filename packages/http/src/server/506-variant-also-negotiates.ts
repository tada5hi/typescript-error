import { BaseError, ErrorOptions } from "@typescript-error/core";

export class VariantAlsoNegotiates extends BaseError {
    constructor(message?: string, options?: ErrorOptions) {
        options = options ?? {};
        options.code = options.code ?? `VARIANT_ALSO_NEGOTIATES`;
        options.statusCode = options.statusCode ?? 506;

        message = message ?? `Variant Also Negotiates`;

        super(message, options);
    }
}
