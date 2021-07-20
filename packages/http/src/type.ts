import {BaseError, ErrorOptions} from "@typescript-error/core";
import {ClientErrorMapping} from "./config";
import {ServerErrorMapping} from "./config";

export type ClientErrorKey = keyof typeof ClientErrorMapping;
export type ClientErrorType = Record<ClientErrorKey, new (message?: string, options?: ErrorOptions) => BaseError>;

export type ServerErrorKey = keyof typeof ServerErrorMapping;
export type ServerErrorType = Record<ServerErrorKey, new (message?: string, options?: ErrorOptions) => BaseError>;
