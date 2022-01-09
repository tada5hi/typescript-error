import { ErrorOptions } from './type';
import { buildErrorOptions, determineErrorMessage } from './utils';

export class BaseError extends Error {
    public readonly options: ErrorOptions;

    //--------------------------------------------------------------------

    constructor(
        data?: string | Error | ErrorOptions,
        options?: ErrorOptions,
    ) {
        options = buildErrorOptions(data, options);
        const message = determineErrorMessage(data, options);

        super(message);

        if (this.name === undefined || this.name === 'Error') {
            Object.defineProperty(this, 'name', {
                configurable: true,
                enumerable: false,
                value: this.constructor.name,
                writable: true,
            });
        }

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }

        /* istanbul ignore next */
        if (typeof this.stack === 'undefined' || this.stack === '') {
            this.stack = new Error(message).stack;
        }

        this.options = {};
        this.setOptions(options);
    }

    //--------------------------------------------------------------------

    public getOptions(): ErrorOptions {
        return this.options;
    }

    public getOption<T extends keyof ErrorOptions>(key: T): ErrorOptions[T] | undefined {
        return this.options[key];
    }

    //--------------------------------------------------------------------

    setOptions(options?: ErrorOptions): void {
        options = options ?? {};

        const keys = Object.keys(options);
        for (let i = 0; i < keys.length; i++) {
            this.setOption(keys[i], options[keys[i]]);
        }
    }

    public setOption<T extends keyof ErrorOptions>(key: T, value: ErrorOptions[T]) {
        Object.assign(this.options, { [key]: value });
    }

    public unsetOption<T extends keyof ErrorOptions>(key: T) {
        if (Object.prototype.hasOwnProperty.call(this.options, key)) {
            delete this.options[key];
        }
    }
}
