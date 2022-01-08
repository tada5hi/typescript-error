import { ClientError, ServerError } from './errors';

export function isClientError<T extends ClientError>(error: unknown) : error is T {
    return error instanceof ClientError;
}

export function isServerError<T extends ServerError>(error: unknown) : error is T {
    return error instanceof ServerError;
}
