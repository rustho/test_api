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

import { CptDto } from '../models/CptDto';
import { HttpFile } from '../http/http';

export class CptControllerSearch200Response {
    'result'?: Array<CptDto>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "result",
            "baseName": "result",
            "type": "Array<CptDto>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CptControllerSearch200Response.attributeTypeMap;
    }

    public constructor() {
    }
}
