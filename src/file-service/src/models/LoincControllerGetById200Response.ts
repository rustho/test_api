/**
 * Terminology
 * Terminology API
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LoincDto } from '../models/LoincDto';
import { HttpFile } from '../http/http';

export class LoincControllerGetById200Response {
    'result'?: LoincDto;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "result",
            "baseName": "result",
            "type": "LoincDto",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return LoincControllerGetById200Response.attributeTypeMap;
    }

    public constructor() {
    }
}
