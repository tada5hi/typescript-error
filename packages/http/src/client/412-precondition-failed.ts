import { BaseError, ErrorOptions } from "@typescript-error/core";

export class PreconditionFailed extends BaseError {
    constructor(data?: string | Error, options?: ErrorOptions) {
        options = options ?? {};
        options.code = options.code ?? `PRECONDITION_FAILED`;
        options.statusCode = options.statusCode ?? 412;
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
                message = `Precondition Failed`;
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
