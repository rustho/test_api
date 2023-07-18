// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { LoincControllerGetById200Response } from '../models/LoincControllerGetById200Response';
import { LoincControllerGetById404Response } from '../models/LoincControllerGetById404Response';
import { LoincControllerSearch200Response } from '../models/LoincControllerSearch200Response';

/**
 * no description
 */
export class LOINCApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param id 
     * @param REQUEST_SOURCE 
     * @param REQUEST_TOPIC 
     */
    public async loincControllerGetById(id: string, REQUEST_SOURCE: any, REQUEST_TOPIC: any, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("LOINCApi", "loincControllerGetById", "id");
        }


        // verify required parameter 'REQUEST_SOURCE' is not null or undefined
        if (REQUEST_SOURCE === null || REQUEST_SOURCE === undefined) {
            throw new RequiredError("LOINCApi", "loincControllerGetById", "REQUEST_SOURCE");
        }


        // verify required parameter 'REQUEST_TOPIC' is not null or undefined
        if (REQUEST_TOPIC === null || REQUEST_TOPIC === undefined) {
            throw new RequiredError("LOINCApi", "loincControllerGetById", "REQUEST_TOPIC");
        }


        // Path Params
        const localVarPath = '/api/v1/loinc/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

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
     * @param text 
     * @param REQUEST_SOURCE 
     * @param REQUEST_TOPIC 
     * @param limit 
     * @param page 
     */
    public async loincControllerSearch(text: string, REQUEST_SOURCE: any, REQUEST_TOPIC: any, limit?: string, page?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'text' is not null or undefined
        if (text === null || text === undefined) {
            throw new RequiredError("LOINCApi", "loincControllerSearch", "text");
        }


        // verify required parameter 'REQUEST_SOURCE' is not null or undefined
        if (REQUEST_SOURCE === null || REQUEST_SOURCE === undefined) {
            throw new RequiredError("LOINCApi", "loincControllerSearch", "REQUEST_SOURCE");
        }


        // verify required parameter 'REQUEST_TOPIC' is not null or undefined
        if (REQUEST_TOPIC === null || REQUEST_TOPIC === undefined) {
            throw new RequiredError("LOINCApi", "loincControllerSearch", "REQUEST_TOPIC");
        }




        // Path Params
        const localVarPath = '/api/v1/loinc/search';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (text !== undefined) {
            requestContext.setQueryParam("text", ObjectSerializer.serialize(text, "string", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "string", ""));
        }

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "string", ""));
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

export class LOINCApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to loincControllerGetById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async loincControllerGetById(response: ResponseContext): Promise<LoincControllerGetById200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LoincControllerGetById200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoincControllerGetById200Response", ""
            ) as LoincControllerGetById200Response;
            return body;
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: LoincControllerGetById404Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoincControllerGetById404Response", ""
            ) as LoincControllerGetById404Response;
            throw new ApiException<LoincControllerGetById404Response>(response.httpStatusCode, "The Search Loinc By Id Not Found Exception", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LoincControllerGetById200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoincControllerGetById200Response", ""
            ) as LoincControllerGetById200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to loincControllerSearch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async loincControllerSearch(response: ResponseContext): Promise<LoincControllerSearch200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LoincControllerSearch200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoincControllerSearch200Response", ""
            ) as LoincControllerSearch200Response;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LoincControllerSearch200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoincControllerSearch200Response", ""
            ) as LoincControllerSearch200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
