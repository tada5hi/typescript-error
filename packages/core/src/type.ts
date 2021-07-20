export type ErrorOptions = {
    /**
     * The error code is a short uppercase string identifier for the error. For example: SERVER_ERROR
     */
    code?: string,
    /**
     * Mark this error as error which need to be logged.
     */
    logMessage?: boolean,
    /**
     * Set the log level for this error.
     */
    logLevel?: string | number,

    /**
     * Specify if the error message should be decorated for public view
     * or already provide a decoration message.
     */
    decorateMessage?: boolean | string,
    /**
     * Specify a previous error.
     */
    previous?: Error,
    /**
     * In case of a http error provide a numeric Status Code between 400-599.
     */
    statusCode?: number,
    /**
     * Specify a redirect URL in case of a http error.
     */
    redirectURL?: string,

    /**
     * Permit additional properties
     */
    [key: string]: any
}
