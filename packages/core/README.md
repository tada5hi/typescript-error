# @typescript-error/core ⛱

[![npm version](https://badge.fury.io/js/@typescript-error%2Fcore.svg)](https://badge.fury.io/js/@typescript-error%2Fcore)
[![main](https://github.com/Tada5hi/typescript-error/actions/workflows/main.yml/badge.svg)](https://github.com/Tada5hi/typescript-error/actions/workflows/main.yml)
[![codecov](https://codecov.io/gh/tada5hi/typescript-error/branch/master/graph/badge.svg?token=RFYI5CVQK4)](https://codecov.io/gh/tada5hi/typescript-error)

This is a library, which provides a base error class, which can simply be extended ⚡.
It also provides some utility functions to `build`, `merge` and `set un-set` options. 

**Table of Contents**

- [Installation](#installation)
- [Usage](#usage)
    - [Simple](#simple)
    - [Inheritance](#inheritance)
    - [Utils](#utils)
- [Types](#types)

## Installation

```bash
npm install @typescript-error/core --save
```

## Usage

### Simple
The `BaseError` class can be initialized on different ways, like demonstrated by the following examples:

**Example #1**

In this example no options are specified on class instantiation, but afterwards.
```typescript
import {BaseError} from "@typescript-error/core";

const error = new BaseError('An error occurred.');

console.log(error.message);
// An error is occurred.

console.log(error.getOptions());
// {}

error.setOption('statusCode', 404);

console.log(error.getOptions());
// {statusCode: 404}

console.log(error.getOption('statusCode'));
// 404
```

**Example #2**

In the following example the error options are specified on instantiation.

```typescript
import {BaseError, ErrorOptions} from "@typescript-error/core";

const options : ErrorOptions = {
    statusCode: 404,
    //... define some own options
    foo: 'bar'
}
const error = new BaseError('The entity could not be found', options);

const statusCode = error.getOption('statusCode');
console.log(statusCode);
// 404

const foo = error.getOption('foo');
console.log(foo);
// bar
```
Like demonstrated in the example above, self defined options can be provided in addition to 
the existing options keys ⚡.

**Example #3**

In the following example only the error options are passed as single argument to the error constructor.

```typescript
import {BaseError, ErrorOptions} from "@typescript-error/core";

const options : ErrorOptions = {
    message: 'The entity could not be found',
    statusCode: 404,
    //... define some own options
    foo: 'bar'
}
const error = new BaseError(options);

console.log(error.message);
// The entity could not be found

// access the option values
const statusCode = error.getOption('statusCode');
console.log(statusCode);
// 404
```


### Inheritance

Besides, using only the BaseError class, own classes which inherit the BaseError class,
can simply be created and provide a better way to handle errors more differentiated.

```typescript
import {
    BaseError, 
    ErrorOptions,
    mergeErrorOptions
} from "@typescript-error/core";

export class NotFoundError extends BaseError {
    constructor(message?: ErrorOptions) {
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

### Utils

The library is like already mentioned also shipped with some utility functions, to make life easier.

#### buildErrorOptions
The `buildErrorOptions` method requires two arguments. The first one can either be a `string`, `Error` or a
value of type `ErrorOptions`. The second argument one, on the other hand must be of type `ErrorOptions`.

```typescript
import {buildErrorOptions} from "@typescript-error/core";

let options = buildErrorOptions({
    statusCode: 404
}, {
    error: 'ERROR'
});
console.log(options);
// {statusCode: 404, code: 'ERROR'}

options = buildErrorOptions('An error occurred.', {code: 'ERROR'});
console.log(options);
// {code: 'ERROR'}
```

#### mergeErrorOptions

The `mergeErrorOptions` accepts 1-n arguments of type `ErrorOptions` and merge them to one option set,
which is then provided as return value.

```typescript
import {mergeErrorOptions} from "@typescript-error/core";

let options = mergeErrorOptions({
    statusCode: 404
}, {
    error: 'ERROR'
});
console.log(options);
// {statusCode: 404, code: 'ERROR'}

options = mergeErrorOptions('An error occurred.', {code: 'ERROR'});
console.log(options);
// {code: 'ERROR'}
```

#### setUnsetErrorOptions
The `setUnsetErrorOptions` method requires two arguments of type `ErrorOptions`.

```typescript
import {setUnsetErrorOptions} from "@typescript-error/core";

let options = setUnsetErrorOptions({
    statusCode: 404
}, {
    error: 'ERROR'
});
console.log(options);
// {statusCode: 404, code: 'ERROR'}

options = setUnsetErrorOptions({code: undefined}, {code: 'ERROR'});
console.log(options);
// {code: undefined}
```
## Types

### ErrorOptions
```typescript
export type ErrorOptions = {
    /**
     * The error code is either a short uppercase string identifier 
     * for the error or a numeric error code. For example: SERVER_ERROR
     */
    code?: string | number,

    /**
     * The actual error message, if not provided on another way.
     */
    message?: string,

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
     * Provide additional options.
     */
    [key: string]: any
}
```
