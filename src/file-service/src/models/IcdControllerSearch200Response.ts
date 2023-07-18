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

import { IcdDto } from '../models/IcdDto';
import { HttpFile } from '../http/http';

export class IcdControllerSearch200Response {
    'results'?: Array<IcdDto>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<IcdDto>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IcdControllerSearch200Response.attributeTypeMap;
    }

    public constructor() {
    }
}
