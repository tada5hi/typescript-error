import {ClientError, ServerError} from "./errors";

export function isClientError<T extends Error>(error: T) : boolean {
    return error instanceof ClientError;
}

export function isServerError<T extends Error>(error: T) : boolean {
    return error instanceof ServerError;
}
