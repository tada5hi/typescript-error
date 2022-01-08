/*
 * Copyright (c) 2022.
 * Author Peter Placzek (tada5hi)
 * For the full copyright and license information,
 * view the LICENSE file that was distributed with this source code.
 */

import exp from 'constants';
import {
    BaseError, ErrorOptions, buildErrorOptions, mergeErrorOptions, setUnsetErrorOptions,
} from '../../../src';

describe('src/utils/error-options.ts', () => {
    it('should merge options', () => {
        let options = mergeErrorOptions({
            statusCode: 404,
        }, {
            code: 'ERROR',
        });
        expect(options).toEqual({
            statusCode: 404,
            code: 'ERROR',
        } as ErrorOptions);

        options = mergeErrorOptions({ }, { code: 'FOO' });
        expect(options).toEqual({ code: 'FOO' });
    });

    it('should set un-set options', () => {
        let options = setUnsetErrorOptions({}, { code: 'ERROR' });
        expect(options).toEqual({ code: 'ERROR' } as ErrorOptions);

        options = setUnsetErrorOptions({ code: 'FOO' }, { code: 'BAR' });
        expect(options).toEqual({ code: 'FOO' });

        options = setUnsetErrorOptions({ code: null }, { code: 'FOO' });
        expect(options).toEqual({ code: null });

        options = setUnsetErrorOptions({ code: undefined }, { code: 'FOO' });
        expect(options).toEqual({ code: undefined });

        options = setUnsetErrorOptions({ code: 0 }, { code: 'FOO' });
        expect(options).toEqual({ code: 0 });
    });

    it('should build options', () => {
        const error = new BaseError();
        const options = buildErrorOptions(error, {});

        expect(options.previous).toEqual(error);
    });
});
