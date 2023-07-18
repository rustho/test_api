// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { NpiControllerGetIndividualById200Response } from '../models/NpiControllerGetIndividualById200Response';
import { NpiControllerGetIndividualById400Response } from '../models/NpiControllerGetIndividualById400Response';
import { NpiControllerGetIndividualById404Response } from '../models/NpiControllerGetIndividualById404Response';
import { NpiControllerGetIndividualById500Response } from '../models/NpiControllerGetIndividualById500Response';
import { NpiControllerGetLaboratoryById200Response } from '../models/NpiControllerGetLaboratoryById200Response';
import { NpiControllerGetLaboratoryById404Response } from '../models/NpiControllerGetLaboratoryById404Response';
import { NpiControllerGetPracticeById404Response } from '../models/NpiControllerGetPracticeById404Response';
import { NpiControllerSearchIndividual200Response } from '../models/NpiControllerSearchIndividual200Response';
import { NpiControllerSearchLaboratory200Response } from '../models/NpiControllerSearchLaboratory200Response';

/**
 * no description
 */
export class NPIApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param id 
     * @param REQUEST_SOURCE 
     * @param REQUEST_TOPIC 
     */
    public async npiControllerGetIndividualById(id: string, REQUEST_SOURCE: any, REQUEST_TOPIC: any, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("NPIApi", "npiControllerGetIndividualById", "id");
        }


        // verify required parameter 'REQUEST_SOURCE' is not null or undefined
        if (REQUEST_SOURCE === null || REQUEST_SOURCE === undefined) {
            throw new RequiredError("NPIApi", "npiControllerGetIndividualById", "REQUEST_SOURCE");
        }


        // verify required parameter 'REQUEST_TOPIC' is not null or undefined
        if (REQUEST_TOPIC === null || REQUEST_TOPIC === undefined) {
            throw new RequiredError("NPIApi", "npiControllerGetIndividualById", "REQUEST_TOPIC");
        }


        // Path Params
        const localVarPath = '/api/v1/npi/individual/{id}'
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
     * @param id 
     * @param REQUEST_SOURCE 
     * @param REQUEST_TOPIC 
     */
    public async npiControllerGetLaboratoryById(id: string, REQUEST_SOURCE: any, REQUEST_TOPIC: any, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("NPIApi", "npiControllerGetLaboratoryById", "id");
        }


        // verify required parameter 'REQUEST_SOURCE' is not null or undefined
        if (REQUEST_SOURCE === null || REQUEST_SOURCE === undefined) {
            throw new RequiredError("NPIApi", "npiControllerGetLaboratoryById", "REQUEST_SOURCE");
        }


        // verify required parameter 'REQUEST_TOPIC' is not null or undefined
        if (REQUEST_TOPIC === null || REQUEST_TOPIC === undefined) {
            throw new RequiredError("NPIApi", "npiControllerGetLaboratoryById", "REQUEST_TOPIC");
        }


        // Path Params
        const localVarPath = '/api/v1/npi/laboratory/{id}'
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
     * @param id 
     * @param REQUEST_SOURCE 
     * @param REQUEST_TOPIC 
     */
    public async npiControllerGetPracticeById(id: string, REQUEST_SOURCE: any, REQUEST_TOPIC: any, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("NPIApi", "npiControllerGetPracticeById", "id");
        }


        // verify required parameter 'REQUEST_SOURCE' is not null or undefined
        if (REQUEST_SOURCE === null || REQUEST_SOURCE === undefined) {
            throw new RequiredError("NPIApi", "npiControllerGetPracticeById", "REQUEST_SOURCE");
        }


        // verify required parameter 'REQUEST_TOPIC' is not null or undefined
        if (REQUEST_TOPIC === null || REQUEST_TOPIC === undefined) {
            throw new RequiredError("NPIApi", "npiControllerGetPracticeById", "REQUEST_TOPIC");
        }


        // Path Params
        const localVarPath = '/api/v1/npi/practice/{id}'
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
    public async npiControllerSearchIndividual(text: string, REQUEST_SOURCE: any, REQUEST_TOPIC: any, limit?: string, page?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'text' is not null or undefined
        if (text === null || text === undefined) {
            throw new RequiredError("NPIApi", "npiControllerSearchIndividual", "text");
        }


        // verify required parameter 'REQUEST_SOURCE' is not null or undefined
        if (REQUEST_SOURCE === null || REQUEST_SOURCE === undefined) {
            throw new RequiredError("NPIApi", "npiControllerSearchIndividual", "REQUEST_SOURCE");
        }


        // verify required parameter 'REQUEST_TOPIC' is not null or undefined
        if (REQUEST_TOPIC === null || REQUEST_TOPIC === undefined) {
            throw new RequiredError("NPIApi", "npiControllerSearchIndividual", "REQUEST_TOPIC");
        }




        // Path Params
        const localVarPath = '/api/v1/npi/individual/search';

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

    /**
     * @param text 
     * @param REQUEST_SOURCE 
     * @param REQUEST_TOPIC 
     * @param limit 
     * @param page 
     */
    public async npiControllerSearchLaboratory(text: string, REQUEST_SOURCE: any, REQUEST_TOPIC: any, limit?: string, page?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'text' is not null or undefined
        if (text === null || text === undefined) {
            throw new RequiredError("NPIApi", "npiControllerSearchLaboratory", "text");
        }


        // verify required parameter 'REQUEST_SOURCE' is not null or undefined
        if (REQUEST_SOURCE === null || REQUEST_SOURCE === undefined) {
            throw new RequiredError("NPIApi", "npiControllerSearchLaboratory", "REQUEST_SOURCE");
        }


        // verify required parameter 'REQUEST_TOPIC' is not null or undefined
        if (REQUEST_TOPIC === null || REQUEST_TOPIC === undefined) {
            throw new RequiredError("NPIApi", "npiControllerSearchLaboratory", "REQUEST_TOPIC");
        }




        // Path Params
        const localVarPath = '/api/v1/npi/laboratory/search';

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

    /**
     * @param text 
     * @param REQUEST_SOURCE 
     * @param REQUEST_TOPIC 
     * @param limit 
     * @param page 
     */
    public async npiControllerSearchPractice(text: string, REQUEST_SOURCE: any, REQUEST_TOPIC: any, limit?: string, page?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'text' is not null or undefined
        if (text === null || text === undefined) {
            throw new RequiredError("NPIApi", "npiControllerSearchPractice", "text");
        }


        // verify required parameter 'REQUEST_SOURCE' is not null or undefined
        if (REQUEST_SOURCE === null || REQUEST_SOURCE === undefined) {
            throw new RequiredError("NPIApi", "npiControllerSearchPractice", "REQUEST_SOURCE");
        }


        // verify required parameter 'REQUEST_TOPIC' is not null or undefined
        if (REQUEST_TOPIC === null || REQUEST_TOPIC === undefined) {
            throw new RequiredError("NPIApi", "npiControllerSearchPractice", "REQUEST_TOPIC");
        }




        // Path Params
        const localVarPath = '/api/v1/npi/practice/search';

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

export class NPIApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to npiControllerGetIndividualById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async npiControllerGetIndividualById(response: ResponseContext): Promise<NpiControllerGetIndividualById200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NpiControllerGetIndividualById200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NpiControllerGetIndividualById200Response", ""
            ) as NpiControllerGetIndividualById200Response;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: NpiControllerGetIndividualById400Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NpiControllerGetIndividualById400Response", ""
            ) as NpiControllerGetIndividualById400Response;
            throw new ApiException<NpiControllerGetIndividualById400Response>(response.httpStatusCode, "The Search NPI Individual By Id Bad Request Exception", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NpiControllerGetIndividualById404Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NpiControllerGetIndividualById404Response", ""
            ) as NpiControllerGetIndividualById404Response;
            throw new ApiException<NpiControllerGetIndividualById404Response>(response.httpStatusCode, "The Search NPI Individual By Id Not Found Exception", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: NpiControllerGetIndividualById500Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NpiControllerGetIndividualById500Response", ""
            ) as NpiControllerGetIndividualById500Response;
            throw new ApiException<NpiControllerGetIndividualById500Response>(response.httpStatusCode, "The Search NPI Individual By Id Internal Server Exception", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: NpiControllerGetIndividualById200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NpiControllerGetIndividualById200Response", ""
            ) as NpiControllerGetIndividualById200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to npiControllerGetLaboratoryById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async npiControllerGetLaboratoryById(response: ResponseContext): Promise<NpiControllerGetLaboratoryById200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NpiControllerGetLaboratoryById200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NpiControllerGetLaboratoryById200Response", ""
            ) as NpiControllerGetLaboratoryById200Response;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: NpiControllerGetIndividualById400Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NpiControllerGetIndividualById400Response", ""
            ) as NpiControllerGetIndividualById400Response;
            throw new ApiException<NpiControllerGetIndividualById400Response>(response.httpStatusCode, "The Search NPI Laboratory By Id Bad Request Exception", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NpiControllerGetLaboratoryById404Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NpiControllerGetLaboratoryById404Response", ""
            ) as NpiControllerGetLaboratoryById404Response;
            throw new ApiException<NpiControllerGetLaboratoryById404Response>(response.httpStatusCode, "The Search NPI Laboratory By Id Not Found Exception", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: NpiControllerGetIndividualById500Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NpiControllerGetIndividualById500Response", ""
            ) as NpiControllerGetIndividualById500Response;
            throw new ApiException<NpiControllerGetIndividualById500Response>(response.httpStatusCode, "The Search NPI Laboratory By Id Internal Server Exception", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: NpiControllerGetLaboratoryById200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NpiControllerGetLaboratoryById200Response", ""
            ) as NpiControllerGetLaboratoryById200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to npiControllerGetPracticeById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async npiControllerGetPracticeById(response: ResponseContext): Promise<NpiControllerGetLaboratoryById200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NpiControllerGetLaboratoryById200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NpiControllerGetLaboratoryById200Response", ""
            ) as NpiControllerGetLaboratoryById200Response;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: NpiControllerGetIndividualById400Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NpiControllerGetIndividualById400Response", ""
            ) as NpiControllerGetIndividualById400Response;
            throw new ApiException<NpiControllerGetIndividualById400Response>(response.httpStatusCode, "The Search NPI Practice By Id Bad Request Exception", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NpiControllerGetPracticeById404Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NpiControllerGetPracticeById404Response", ""
            ) as NpiControllerGetPracticeById404Response;
            throw new ApiException<NpiControllerGetPracticeById404Response>(response.httpStatusCode, "The Search NPI Practice By Id Not Found Exception", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: NpiControllerGetIndividualById500Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NpiControllerGetIndividualById500Response", ""
            ) as NpiControllerGetIndividualById500Response;
            throw new ApiException<NpiControllerGetIndividualById500Response>(response.httpStatusCode, "The Search NPI Practice By Id Internal Server Exception", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: NpiControllerGetLaboratoryById200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NpiControllerGetLaboratoryById200Response", ""
            ) as NpiControllerGetLaboratoryById200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to npiControllerSearchIndividual
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async npiControllerSearchIndividual(response: ResponseContext): Promise<NpiControllerSearchIndividual200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NpiControllerSearchIndividual200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NpiControllerSearchIndividual200Response", ""
            ) as NpiControllerSearchIndividual200Response;
            return body;
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: NpiControllerGetIndividualById500Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NpiControllerGetIndividualById500Response", ""
            ) as NpiControllerGetIndividualById500Response;
            throw new ApiException<NpiControllerGetIndividualById500Response>(response.httpStatusCode, "The Search NPI Individual By Id Internal Server Exception", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: NpiControllerSearchIndividual200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NpiControllerSearchIndividual200Response", ""
            ) as NpiControllerSearchIndividual200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to npiControllerSearchLaboratory
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async npiControllerSearchLaboratory(response: ResponseContext): Promise<NpiControllerSearchLaboratory200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NpiControllerSearchLaboratory200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NpiControllerSearchLaboratory200Response", ""
            ) as NpiControllerSearchLaboratory200Response;
            return body;
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: NpiControllerGetIndividualById500Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NpiControllerGetIndividualById500Response", ""
            ) as NpiControllerGetIndividualById500Response;
            throw new ApiException<NpiControllerGetIndividualById500Response>(response.httpStatusCode, "The Search NPI Laboratory By Id Internal Server Exception", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: NpiControllerSearchLaboratory200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NpiControllerSearchLaboratory200Response", ""
            ) as NpiControllerSearchLaboratory200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to npiControllerSearchPractice
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async npiControllerSearchPractice(response: ResponseContext): Promise<NpiControllerSearchLaboratory200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NpiControllerSearchLaboratory200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NpiControllerSearchLaboratory200Response", ""
            ) as NpiControllerSearchLaboratory200Response;
            return body;
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: NpiControllerGetIndividualById500Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NpiControllerGetIndividualById500Response", ""
            ) as NpiControllerGetIndividualById500Response;
            throw new ApiException<NpiControllerGetIndividualById500Response>(response.httpStatusCode, "The Search NPI Practice By Id Internal Server Exception", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: NpiControllerSearchLaboratory200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NpiControllerSearchLaboratory200Response", ""
            ) as NpiControllerSearchLaboratory200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
