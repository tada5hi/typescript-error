[![npm version](https://badge.fury.io/js/@typescript-error%2Fhttp.svg)](https://badge.fury.io/js/@typescript-error%2Fhttp)
[![main](https://github.com/Tada5hi/typescript-error/actions/workflows/main.yml/badge.svg)](https://github.com/Tada5hi/typescript-error/actions/workflows/main.yml)
# @typescript-error/http 🔥

This is a library, which provides abstract http error classes (`NotFoundError`, `InternalServerError`, ...), 
which can also be extended by specific implementations.

**Table of Contents**

- [Installation](#installation)
- [Usage](#usage)
- [Types](#types)
  - [Client](#client)
  - [Server](#server)

## Installation

```bash
npm install @typescript-error/http --save
```

## Usage

The usage to implement and extend the error classes are similar to the concept described
in the [@typescript-error/core](https://github.com/Tada5hi/typescript-error/tree/master/packages/core#usage) usage section.

## Types

The following abstract HTTP classes are defined:

### Client

- 400 `BadRequestError`
- 401 `UnauthorizedError`
- 403 `ForbiddenError`
- 404 `NotFoundError`
- 405 `MethodNotAllowedError`
- 406 `NotAcceptableError`
- 407 `ProxyAuthenticationRequiredError`
- 408 `RequesTimeoutError`
- 409 `ConflictError`
- 410 `GoneError`
- 411 `LengthRequiredError`
- 412 `PreconditionFailedError`
- 413 `RequestEntityTooLargeError`
- 414 `RequestUriTooLongError`
- 415 `UnsupportedMediaTypeError`
- 416 `RequestRangeNotSatisfiedError`
- 417 `ExpectationFailedError`
- 418 `ImATeapotError`
- 420 `EnhanceYourCalmError`
- 422 `UnprocessableEntityError`
- 423 `LockedError`
- 424 `FailedDependencyError`
- 424 `UnorderedCollectionError`
- 426 `UpgradeRequiredError`
- 428 `PreconditionRequiredError`
- 429 `TooManyRequestError`
- 431 `RequestHeaderFieldsTooLargeError`
- 444 `NoResponseError`
- 449 `RetryWithError`
- 450 `BlockedByWindowsParentError`
- 499 `ClientClosedRequestError`

### Server

- 500 `InternalServerError`
- 501 `NotImplementedError`
- 502 `BadGatewayError`
- 503 `ServiceUnavailableError`
- 504 `GatewayTimeoutError`
- 505 `HTTPVersionNotSupportedError`
- 506 `VariantAlsoNegotiates`
- 507 `InsufficientStorageError`
- 508 `LoopDetectedError`
- 509 `BandwidthLimitExceededError`
- 510 `NotExtendedError`
- 511 `NetworkAuthenticationRequiredError`
