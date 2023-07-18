// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { IcdControllerGetById200Response } from '../models/IcdControllerGetById200Response';
import { IcdControllerGetById404Response } from '../models/IcdControllerGetById404Response';
import { IcdControllerSearch200Response } from '../models/IcdControllerSearch200Response';

/**
 * no description
 */
export class ICDApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param id 
     * @param REQUEST_SOURCE 
     * @param REQUEST_TOPIC 
     */
    public async icdControllerGetById(id: string, REQUEST_SOURCE: any, REQUEST_TOPIC: any, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("ICDApi", "icdControllerGetById", "id");
        }


        // verify required parameter 'REQUEST_SOURCE' is not null or undefined
        if (REQUEST_SOURCE === null || REQUEST_SOURCE === undefined) {
            throw new RequiredError("ICDApi", "icdControllerGetById", "REQUEST_SOURCE");
        }


        // verify required parameter 'REQUEST_TOPIC' is not null or undefined
        if (REQUEST_TOPIC === null || REQUEST_TOPIC === undefined) {
            throw new RequiredError("ICDApi", "icdControllerGetById", "REQUEST_TOPIC");
        }


        // Path Params
        const localVarPath = '/api/v1/icd/{id}'
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
    public async icdControllerSearch(text: string, REQUEST_SOURCE: any, REQUEST_TOPIC: any, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'text' is not null or undefined
        if (text === null || text === undefined) {
            throw new RequiredError("ICDApi", "icdControllerSearch", "text");
        }


        // verify required parameter 'REQUEST_SOURCE' is not null or undefined
        if (REQUEST_SOURCE === null || REQUEST_SOURCE === undefined) {
            throw new RequiredError("ICDApi", "icdControllerSearch", "REQUEST_SOURCE");
        }


        // verify required parameter 'REQUEST_TOPIC' is not null or undefined
        if (REQUEST_TOPIC === null || REQUEST_TOPIC === undefined) {
            throw new RequiredError("ICDApi", "icdControllerSearch", "REQUEST_TOPIC");
        }


        // Path Params
        const localVarPath = '/api/v1/icd/search';

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

export class ICDApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to icdControllerGetById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async icdControllerGetById(response: ResponseContext): Promise<IcdControllerGetById200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: IcdControllerGetById200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "IcdControllerGetById200Response", ""
            ) as IcdControllerGetById200Response;
            return body;
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: IcdControllerGetById404Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "IcdControllerGetById404Response", ""
            ) as IcdControllerGetById404Response;
            throw new ApiException<IcdControllerGetById404Response>(response.httpStatusCode, "The Search ICD By Id Not Found Exception", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: IcdControllerGetById200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "IcdControllerGetById200Response", ""
            ) as IcdControllerGetById200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to icdControllerSearch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async icdControllerSearch(response: ResponseContext): Promise<IcdControllerSearch200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: IcdControllerSearch200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "IcdControllerSearch200Response", ""
            ) as IcdControllerSearch200Response;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: IcdControllerSearch200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "IcdControllerSearch200Response", ""
            ) as IcdControllerSearch200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
