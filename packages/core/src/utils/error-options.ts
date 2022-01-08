/*
 * Copyright (c) 2021.
 * Author Peter Placzek (tada5hi)
 * For the full copyright and license information,
 * view the LICENSE file that was distributed with this source code.
 */

import { ErrorOptions } from '../type';

function isObject(item) {
    return (item && typeof item === 'object' && !Array.isArray(item));
}

/**
 * Deep merge two objects.
 * @param target
 * @param sources
 */
export function mergeErrorOptions(
    target: ErrorOptions,
    ...sources: ErrorOptions[]
) : ErrorOptions {
    if (!sources.length) return target;

    const source = sources.shift();

    if (isObject(target) && isObject(source)) {
        const keys = Object.keys(source);
        for (let i = 0; i < keys.length; i++) {
            if (isObject(source[keys[i]])) {
                if (!target[keys[i]]) Object.assign(target, { [keys[i]]: {} });
                mergeErrorOptions(target[keys[i]], source[keys[i]]);
            } else {
                Object.assign(target, { [keys[i]]: source[keys[i]] });
            }
        }
    }

    return mergeErrorOptions(target, ...sources);
}

export function setUnsetErrorOptions(
    base: ErrorOptions,
    options: ErrorOptions,
) : ErrorOptions {
    const keys = Object.keys(options);

    for (let i = 0; i < keys.length; i++) {
        if (
            !Object.prototype.hasOwnProperty.call(base, keys[i]) ||
            base[keys[i]] === null ||
            typeof base[keys[i]] === 'undefined'
        ) {
            base[keys[i]] = options[keys[i]];
        }
    }

    return base;
}

export function buildErrorOptions(
    data: string | Error | ErrorOptions,
    options?: ErrorOptions,
) : ErrorOptions {
    options ??= {};

    if (
        !(data instanceof Error) &&
        typeof data !== 'string'
    ) {
        options = {
            ...options,
            ...data,
        };
    }

    if (
        !options.previous &&
        data instanceof Error
    ) {
        options.previous = data;
    }

    return options;
}
