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

import { NpiOrganizationDto } from '../models/NpiOrganizationDto';
import { HttpFile } from '../http/http';

export class NpiControllerGetLaboratoryById200Response {
    'result'?: NpiOrganizationDto;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "result",
            "baseName": "result",
            "type": "NpiOrganizationDto",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return NpiControllerGetLaboratoryById200Response.attributeTypeMap;
    }

    public constructor() {
    }
}

