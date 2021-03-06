/*******************************************************************************

    The class that defines the BitField of a block.

    Copyright:
        Copyright (c) 2020-2021 BOSAGORA Foundation
        All rights reserved.

    License:
        MIT License. See LICENSE for details.

*******************************************************************************/

import { JSONValidator } from '../utils/JSONValidator';

/**
 * The class that defines the BitField of a block.
 * Convert JSON object to TypeScript's instance.
 * An exception occurs if the required property are not present.
 */
export class BitField
{
    /**
     * The storage with bit data
     */
    public storage: number[];

    /**
     * Constructor
     * @param storage The source storage with bit data
     */
    constructor (storage: number[])
    {
        this.storage = storage;
    }

    /**
     * The reviver parameter to give to `JSON.parse`
     *
     * This function allows to perform any necessary conversion,
     * as well as validation of the final object.
     *
     * @param key   Name of the field being parsed
     * @param value The value associated with `key`
     * @returns A new instance of `BitField` if `key == ""`, `value` otherwise.
     */
    public static reviver (key: string, value: any): any
    {
        if (key != "")
            return value;

        let storage = JSON.parse(value);
        JSONValidator.isValidOtherwiseThrow('BitField', storage);

        return new BitField(storage);
    }

    /**
     * Converts this object to its JSON representation
     */
    public toJSON (key?: string): string
    {
        return JSON.stringify(this.storage);
    }
}
