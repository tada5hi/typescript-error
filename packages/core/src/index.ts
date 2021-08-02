import {ErrorOptions} from "./type";

export * from './type';

export class BaseError extends Error {
    public readonly options : ErrorOptions;

    //--------------------------------------------------------------------

    constructor(data?: string | Error, options?: ErrorOptions) {
        options = options ?? {};

        if(
            data instanceof Error &&
            !options.previous
        ) {
            options.previous = data;
        }

        let message : string | undefined = typeof data === 'string' ? data : undefined;
        if(
            !message &&
            !options.decorateMessage
        ) {
            if(data instanceof Error) {
                message = data.message;
            } else if(options.previous instanceof Error) {
                message = options.previous.message;
            }
        }

        super(message);

        if (this.name === undefined || this.name === "Error") {
            Object.defineProperty(this, "name", {
                configurable: true,
                enumerable: false,
                value: this.constructor.name,
                writable: true,
            });
        }

        if(Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        } else if(typeof this.stack === 'undefined' || this.stack === "") {
            this.stack = new Error(message).stack;
        }

        this.options = {};
        this.setOptions(options);
    }

    //--------------------------------------------------------------------

    public getOptions() : ErrorOptions {
        return this.options;
    }

    public getOption<T extends keyof ErrorOptions>(key: T) : ErrorOptions[T] | undefined {
        return this.options[key];
    }

    //--------------------------------------------------------------------

    setOptions(options?: ErrorOptions) : void {
        options = options ?? {};

        for(let k in options) {
            const key : keyof ErrorOptions = k as keyof ErrorOptions;
            this.setOption(key, options[key]);
        }
    }

    public setOption<T extends keyof ErrorOptions>(key: T, value: ErrorOptions[T]) {
        Object.assign(this.options, {[key]: value});
    }
}
