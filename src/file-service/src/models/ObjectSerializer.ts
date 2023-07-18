export * from '../models/CptControllerGetById200Response';
export * from '../models/CptControllerGetById404Response';
export * from '../models/CptControllerSearch200Response';
export * from '../models/CptDto';
export * from '../models/HealthControllerCheck200Response';
export * from '../models/HealthControllerCheck200ResponseInfoValue';
export * from '../models/HealthControllerCheck503Response';
export * from '../models/IcdControllerGetById200Response';
export * from '../models/IcdControllerGetById404Response';
export * from '../models/IcdControllerSearch200Response';
export * from '../models/IcdDto';
export * from '../models/InternalCptControllerImport200Response';
export * from '../models/InternalCptControllerImport200ResponseResult';
export * from '../models/LoincControllerGetById200Response';
export * from '../models/LoincControllerGetById404Response';
export * from '../models/LoincControllerSearch200Response';
export * from '../models/LoincDto';
export * from '../models/NdcControllerGetById200Response';
export * from '../models/NdcControllerGetById404Response';
export * from '../models/NdcControllerSearch200Response';
export * from '../models/NdcDto';
export * from '../models/NpiControllerGetIndividualById200Response';
export * from '../models/NpiControllerGetIndividualById400Response';
export * from '../models/NpiControllerGetIndividualById404Response';
export * from '../models/NpiControllerGetIndividualById500Response';
export * from '../models/NpiControllerGetLaboratoryById200Response';
export * from '../models/NpiControllerGetLaboratoryById404Response';
export * from '../models/NpiControllerGetPracticeById404Response';
export * from '../models/NpiControllerSearchIndividual200Response';
export * from '../models/NpiControllerSearchLaboratory200Response';
export * from '../models/NpiIndividualDto';
export * from '../models/NpiOrganizationDto';

import { CptControllerGetById200Response } from '../models/CptControllerGetById200Response';
import { CptControllerGetById404Response } from '../models/CptControllerGetById404Response';
import { CptControllerSearch200Response } from '../models/CptControllerSearch200Response';
import { CptDto } from '../models/CptDto';
import { HealthControllerCheck200Response } from '../models/HealthControllerCheck200Response';
import { HealthControllerCheck200ResponseInfoValue } from '../models/HealthControllerCheck200ResponseInfoValue';
import { HealthControllerCheck503Response } from '../models/HealthControllerCheck503Response';
import { IcdControllerGetById200Response } from '../models/IcdControllerGetById200Response';
import { IcdControllerGetById404Response } from '../models/IcdControllerGetById404Response';
import { IcdControllerSearch200Response } from '../models/IcdControllerSearch200Response';
import { IcdDto } from '../models/IcdDto';
import { InternalCptControllerImport200Response } from '../models/InternalCptControllerImport200Response';
import { InternalCptControllerImport200ResponseResult } from '../models/InternalCptControllerImport200ResponseResult';
import { LoincControllerGetById200Response } from '../models/LoincControllerGetById200Response';
import { LoincControllerGetById404Response } from '../models/LoincControllerGetById404Response';
import { LoincControllerSearch200Response } from '../models/LoincControllerSearch200Response';
import { LoincDto } from '../models/LoincDto';
import { NdcControllerGetById200Response } from '../models/NdcControllerGetById200Response';
import { NdcControllerGetById404Response } from '../models/NdcControllerGetById404Response';
import { NdcControllerSearch200Response } from '../models/NdcControllerSearch200Response';
import { NdcDto } from '../models/NdcDto';
import { NpiControllerGetIndividualById200Response } from '../models/NpiControllerGetIndividualById200Response';
import { NpiControllerGetIndividualById400Response } from '../models/NpiControllerGetIndividualById400Response';
import { NpiControllerGetIndividualById404Response } from '../models/NpiControllerGetIndividualById404Response';
import { NpiControllerGetIndividualById500Response } from '../models/NpiControllerGetIndividualById500Response';
import { NpiControllerGetLaboratoryById200Response } from '../models/NpiControllerGetLaboratoryById200Response';
import { NpiControllerGetLaboratoryById404Response } from '../models/NpiControllerGetLaboratoryById404Response';
import { NpiControllerGetPracticeById404Response } from '../models/NpiControllerGetPracticeById404Response';
import { NpiControllerSearchIndividual200Response } from '../models/NpiControllerSearchIndividual200Response';
import { NpiControllerSearchLaboratory200Response } from '../models/NpiControllerSearchLaboratory200Response';
import { NpiIndividualDto } from '../models/NpiIndividualDto';
import { NpiOrganizationDto } from '../models/NpiOrganizationDto';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

const supportedMediaTypes: { [mediaType: string]: number } = {
  "application/json": Infinity,
  "application/octet-stream": 0,
  "application/x-www-form-urlencoded": 0
}


let enumsMap: Set<string> = new Set<string>([
]);

let typeMap: {[index: string]: any} = {
    "CptControllerGetById200Response": CptControllerGetById200Response,
    "CptControllerGetById404Response": CptControllerGetById404Response,
    "CptControllerSearch200Response": CptControllerSearch200Response,
    "CptDto": CptDto,
    "HealthControllerCheck200Response": HealthControllerCheck200Response,
    "HealthControllerCheck200ResponseInfoValue": HealthControllerCheck200ResponseInfoValue,
    "HealthControllerCheck503Response": HealthControllerCheck503Response,
    "IcdControllerGetById200Response": IcdControllerGetById200Response,
    "IcdControllerGetById404Response": IcdControllerGetById404Response,
    "IcdControllerSearch200Response": IcdControllerSearch200Response,
    "IcdDto": IcdDto,
    "InternalCptControllerImport200Response": InternalCptControllerImport200Response,
    "InternalCptControllerImport200ResponseResult": InternalCptControllerImport200ResponseResult,
    "LoincControllerGetById200Response": LoincControllerGetById200Response,
    "LoincControllerGetById404Response": LoincControllerGetById404Response,
    "LoincControllerSearch200Response": LoincControllerSearch200Response,
    "LoincDto": LoincDto,
    "NdcControllerGetById200Response": NdcControllerGetById200Response,
    "NdcControllerGetById404Response": NdcControllerGetById404Response,
    "NdcControllerSearch200Response": NdcControllerSearch200Response,
    "NdcDto": NdcDto,
    "NpiControllerGetIndividualById200Response": NpiControllerGetIndividualById200Response,
    "NpiControllerGetIndividualById400Response": NpiControllerGetIndividualById400Response,
    "NpiControllerGetIndividualById404Response": NpiControllerGetIndividualById404Response,
    "NpiControllerGetIndividualById500Response": NpiControllerGetIndividualById500Response,
    "NpiControllerGetLaboratoryById200Response": NpiControllerGetLaboratoryById200Response,
    "NpiControllerGetLaboratoryById404Response": NpiControllerGetLaboratoryById404Response,
    "NpiControllerGetPracticeById404Response": NpiControllerGetPracticeById404Response,
    "NpiControllerSearchIndividual200Response": NpiControllerSearchIndividual200Response,
    "NpiControllerSearchLaboratory200Response": NpiControllerSearchLaboratory200Response,
    "NpiIndividualDto": NpiIndividualDto,
    "NpiOrganizationDto": NpiOrganizationDto,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string, format: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            if (format == "date") {
                let month = data.getMonth()+1
                month = month < 10 ? "0" + month.toString() : month.toString()
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();

                return data.getFullYear() + "-" + month + "-" + day;
            } else {
                return data.toISOString();
            }
        } else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let attributeType of attributeTypes) {
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string, format: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap.has(type)) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let attributeType of attributeTypes) {
                let value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    }


    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    public static normalizeMediaType(mediaType: string | undefined): string | undefined {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    }

    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    public static getPreferredMediaType(mediaTypes: Array<string>): string {
        /** According to OAS 3 we should default to json */
        if (!mediaTypes) {
            return "application/json";
        }

        const normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
        let selectedMediaType: string | undefined = undefined;
        let selectedRank: number = -Infinity;
        for (const mediaType of normalMediaTypes) {
            if (supportedMediaTypes[mediaType!] > selectedRank) {
                selectedMediaType = mediaType;
                selectedRank = supportedMediaTypes[mediaType!];
            }
        }

        if (selectedMediaType === undefined) {
            throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
        }

        return selectedMediaType!;
    }

    /**
     * Convert data to a string according the given media type
     */
    public static stringify(data: any, mediaType: string): string {
        if (mediaType === "text/plain") {
            return String(data);
        }

        if (mediaType === "application/json") {
            return JSON.stringify(data);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }

    /**
     * Parse data from a string according to the given media type
     */
    public static parse(rawData: string, mediaType: string | undefined) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }

        if (mediaType === "text/plain") {
            return rawData;
        }

        if (mediaType === "application/json") {
            return JSON.parse(rawData);
        }

        if (mediaType === "text/html") {
            return rawData;
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
