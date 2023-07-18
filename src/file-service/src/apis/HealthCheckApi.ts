// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { HealthControllerCheck200Response } from '../models/HealthControllerCheck200Response';
import { HealthControllerCheck503Response } from '../models/HealthControllerCheck503Response';

/**
 * no description
 */
export class HealthCheckApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param REQUEST_SOURCE 
     * @param REQUEST_TOPIC 
     */
    public async healthControllerCheck(REQUEST_SOURCE: any, REQUEST_TOPIC: any, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'REQUEST_SOURCE' is not null or undefined
        if (REQUEST_SOURCE === null || REQUEST_SOURCE === undefined) {
            throw new RequiredError("HealthCheckApi", "healthControllerCheck", "REQUEST_SOURCE");
        }


        // verify required parameter 'REQUEST_TOPIC' is not null or undefined
        if (REQUEST_TOPIC === null || REQUEST_TOPIC === undefined) {
            throw new RequiredError("HealthCheckApi", "healthControllerCheck", "REQUEST_TOPIC");
        }


        // Path Params
        const localVarPath = '/healthcheck';

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
     * @param REQUEST_SOURCE 
     * @param REQUEST_TOPIC 
     */
    public async healthControllerMetrics(REQUEST_SOURCE: any, REQUEST_TOPIC: any, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'REQUEST_SOURCE' is not null or undefined
        if (REQUEST_SOURCE === null || REQUEST_SOURCE === undefined) {
            throw new RequiredError("HealthCheckApi", "healthControllerMetrics", "REQUEST_SOURCE");
        }


        // verify required parameter 'REQUEST_TOPIC' is not null or undefined
        if (REQUEST_TOPIC === null || REQUEST_TOPIC === undefined) {
            throw new RequiredError("HealthCheckApi", "healthControllerMetrics", "REQUEST_TOPIC");
        }


        // Path Params
        const localVarPath = '/healthcheck/metrics';

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

}

export class HealthCheckApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to healthControllerCheck
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async healthControllerCheck(response: ResponseContext): Promise<HealthControllerCheck200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: HealthControllerCheck200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HealthControllerCheck200Response", ""
            ) as HealthControllerCheck200Response;
            return body;
        }
        if (isCodeInRange("503", response.httpStatusCode)) {
            const body: HealthControllerCheck503Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HealthControllerCheck503Response", ""
            ) as HealthControllerCheck503Response;
            throw new ApiException<HealthControllerCheck503Response>(response.httpStatusCode, "The Health Check is not successful", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: HealthControllerCheck200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HealthControllerCheck200Response", ""
            ) as HealthControllerCheck200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to healthControllerMetrics
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async healthControllerMetrics(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
