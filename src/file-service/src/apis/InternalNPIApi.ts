// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { InternalCptControllerImport200Response } from '../models/InternalCptControllerImport200Response';

/**
 * no description
 */
export class InternalNPIApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param url 
     * @param REQUEST_SOURCE 
     * @param REQUEST_TOPIC 
     */
    public async internalNpiControllerImport(url: string, REQUEST_SOURCE: any, REQUEST_TOPIC: any, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'url' is not null or undefined
        if (url === null || url === undefined) {
            throw new RequiredError("InternalNPIApi", "internalNpiControllerImport", "url");
        }


        // verify required parameter 'REQUEST_SOURCE' is not null or undefined
        if (REQUEST_SOURCE === null || REQUEST_SOURCE === undefined) {
            throw new RequiredError("InternalNPIApi", "internalNpiControllerImport", "REQUEST_SOURCE");
        }


        // verify required parameter 'REQUEST_TOPIC' is not null or undefined
        if (REQUEST_TOPIC === null || REQUEST_TOPIC === undefined) {
            throw new RequiredError("InternalNPIApi", "internalNpiControllerImport", "REQUEST_TOPIC");
        }


        // Path Params
        const localVarPath = '/api/v1/internal/npi/import/init';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (url !== undefined) {
            requestContext.setQueryParam("url", ObjectSerializer.serialize(url, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("REQUEST_SOURCE", ObjectSerializer.serialize(REQUEST_SOURCE, "any", ""));

        // Header Params
        requestContext.setHeaderParam("REQUEST_TOPIC", ObjectSerializer.serialize(REQUEST_TOPIC, "any", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param url 
     * @param REQUEST_SOURCE 
     * @param REQUEST_TOPIC 
     */
    public async internalNpiControllerImportUpdate(url: string, REQUEST_SOURCE: any, REQUEST_TOPIC: any, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'url' is not null or undefined
        if (url === null || url === undefined) {
            throw new RequiredError("InternalNPIApi", "internalNpiControllerImportUpdate", "url");
        }


        // verify required parameter 'REQUEST_SOURCE' is not null or undefined
        if (REQUEST_SOURCE === null || REQUEST_SOURCE === undefined) {
            throw new RequiredError("InternalNPIApi", "internalNpiControllerImportUpdate", "REQUEST_SOURCE");
        }


        // verify required parameter 'REQUEST_TOPIC' is not null or undefined
        if (REQUEST_TOPIC === null || REQUEST_TOPIC === undefined) {
            throw new RequiredError("InternalNPIApi", "internalNpiControllerImportUpdate", "REQUEST_TOPIC");
        }


        // Path Params
        const localVarPath = '/api/v1/internal/npi/import/update';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (url !== undefined) {
            requestContext.setQueryParam("url", ObjectSerializer.serialize(url, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("REQUEST_SOURCE", ObjectSerializer.serialize(REQUEST_SOURCE, "any", ""));

        // Header Params
        requestContext.setHeaderParam("REQUEST_TOPIC", ObjectSerializer.serialize(REQUEST_TOPIC, "any", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class InternalNPIApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to internalNpiControllerImport
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async internalNpiControllerImport(response: ResponseContext): Promise<InternalCptControllerImport200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InternalCptControllerImport200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InternalCptControllerImport200Response", ""
            ) as InternalCptControllerImport200Response;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InternalCptControllerImport200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InternalCptControllerImport200Response", ""
            ) as InternalCptControllerImport200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to internalNpiControllerImportUpdate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async internalNpiControllerImportUpdate(response: ResponseContext): Promise<InternalCptControllerImport200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InternalCptControllerImport200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InternalCptControllerImport200Response", ""
            ) as InternalCptControllerImport200Response;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InternalCptControllerImport200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InternalCptControllerImport200Response", ""
            ) as InternalCptControllerImport200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
