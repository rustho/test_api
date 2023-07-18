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

import { NpiIndividualDto } from '../models/NpiIndividualDto';
import { HttpFile } from '../http/http';

export class NpiControllerSearchIndividual200Response {
    'result'?: Array<NpiIndividualDto>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "result",
            "baseName": "result",
            "type": "Array<NpiIndividualDto>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return NpiControllerSearchIndividual200Response.attributeTypeMap;
    }

    public constructor() {
    }
}

