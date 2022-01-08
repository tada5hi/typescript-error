/*
 * Copyright (c) 2022-2022.
 * Author Peter Placzek (tada5hi)
 * For the full copyright and license information,
 * view the LICENSE file that was distributed with this source code.
 */

import { ErrorOptions } from '../type';

export function determineErrorMessage(
    data: string | Error | ErrorOptions,
    options: ErrorOptions,
) : string | undefined {
    let message : string | undefined;

    if (
        typeof data === 'string'
    ) {
        message = data;
    }

    if (
        !message &&
        options.message
    ) {
        message = options.message;
    }

    if (
        !message &&
        !options.decorateMessage
    ) {
        if (data instanceof Error) {
            message = data.message;
        } else if (options.previous instanceof Error) {
            message = options.previous.message;
        }
    }

    return message;
}
