[![npm version](https://badge.fury.io/js/@typescript-error%2Fcore.svg)](https://badge.fury.io/js/@typescript-error%2Fcore)
[![main](https://github.com/Tada5hi/typescript-error/actions/workflows/main.yml/badge.svg)](https://github.com/Tada5hi/typescript-error/actions/workflows/main.yml)
# @typescript-error/core ⛱

This is a library, which provides an abstract error class, which can be extended by specific implementations.
It also defines a base error options schema, which can be extended pretty easy ⚡.

**Table of Contents**

- [Installation](#installation)
- [Usage](#usage)
- [Types](#types)

## Installation

```bash
npm install @typescript-error/core --save
```

## Usage

To use the `BaseError` class just import it.

```typescript
import {BaseError, ErrorOptions} from "@typescript-error/core";

const options : ErrorOptions = {
    logMessage: true,
    logLevel: 'warning',
    code: 1,
    statusCode: 404,
    //... define some own options
    foo: 'bar'
}
const error = new BaseError('The entity could not be found', options);

// access the option values

const statusCode = error.getOption('statusCode');
console.log(statusCode);
// 404

const foo = error.getOption('foo');
console.log(foo);
// bar
```
Like demonstrated in the example above, predefined options keys can be set. In addition, own options,
can also be defined ⚡.

Another good practice is to hide common error options under an own definition.

```typescript
import {
    BaseError, 
    ErrorOptions,
    mergeErrorOptions
} from "@typescript-error/core";

export class NotFoundError extends BaseError {
    constructor(options?: ErrorOptions) {
        super(mergeErrorOptions(
            {
                logMessage: true,
                logLevel: 'warning',
                statusCode: 404,   
            },
            ...(options ? options : {})
        ));
    }

}
```

## Types

### ErrorOptions
```typescript
export type ErrorOptions = {
    /**
     * The error code is either a short uppercase string identifier for the error or a numeric error code. For example: SERVER_ERROR
     */
    code?: string | number,
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
```
