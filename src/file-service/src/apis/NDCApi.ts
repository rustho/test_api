// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { NdcControllerGetById200Response } from '../models/NdcControllerGetById200Response';
import { NdcControllerGetById404Response } from '../models/NdcControllerGetById404Response';
import { NdcControllerSearch200Response } from '../models/NdcControllerSearch200Response';

/**
 * no description
 */
export class NDCApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param id 
     * @param REQUEST_SOURCE 
     * @param REQUEST_TOPIC 
     */
    public async ndcControllerGetById(id: string, REQUEST_SOURCE: any, REQUEST_TOPIC: any, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("NDCApi", "ndcControllerGetById", "id");
        }


        // verify required parameter 'REQUEST_SOURCE' is not null or undefined
        if (REQUEST_SOURCE === null || REQUEST_SOURCE === undefined) {
            throw new RequiredError("NDCApi", "ndcControllerGetById", "REQUEST_SOURCE");
        }


        // verify required parameter 'REQUEST_TOPIC' is not null or undefined
        if (REQUEST_TOPIC === null || REQUEST_TOPIC === undefined) {
            throw new RequiredError("NDCApi", "ndcControllerGetById", "REQUEST_TOPIC");
        }


        // Path Params
        const localVarPath = '/api/v1/ndc/{id}'
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
     */
    public async ndcControllerSearch(text: string, REQUEST_SOURCE: any, REQUEST_TOPIC: any, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'text' is not null or undefined
        if (text === null || text === undefined) {
            throw new RequiredError("NDCApi", "ndcControllerSearch", "text");
        }


        // verify required parameter 'REQUEST_SOURCE' is not null or undefined
        if (REQUEST_SOURCE === null || REQUEST_SOURCE === undefined) {
            throw new RequiredError("NDCApi", "ndcControllerSearch", "REQUEST_SOURCE");
        }


        // verify required parameter 'REQUEST_TOPIC' is not null or undefined
        if (REQUEST_TOPIC === null || REQUEST_TOPIC === undefined) {
            throw new RequiredError("NDCApi", "ndcControllerSearch", "REQUEST_TOPIC");
        }


        // Path Params
        const localVarPath = '/api/v1/ndc/search';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (text !== undefined) {
            requestContext.setQueryParam("text", ObjectSerializer.serialize(text, "string", ""));
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

export class NDCApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to ndcControllerGetById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async ndcControllerGetById(response: ResponseContext): Promise<NdcControllerGetById200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NdcControllerGetById200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NdcControllerGetById200Response", ""
            ) as NdcControllerGetById200Response;
            return body;
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NdcControllerGetById404Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NdcControllerGetById404Response", ""
            ) as NdcControllerGetById404Response;
            throw new ApiException<NdcControllerGetById404Response>(response.httpStatusCode, "The Search NDC By Id Not Found Exception", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: NdcControllerGetById200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NdcControllerGetById200Response", ""
            ) as NdcControllerGetById200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to ndcControllerSearch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async ndcControllerSearch(response: ResponseContext): Promise<NdcControllerSearch200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NdcControllerSearch200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NdcControllerSearch200Response", ""
            ) as NdcControllerSearch200Response;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: NdcControllerSearch200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NdcControllerSearch200Response", ""
            ) as NdcControllerSearch200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
