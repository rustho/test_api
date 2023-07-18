# .HealthCheckApi

All URIs are relative to *http://petstore.swagger.io/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**healthControllerCheck**](HealthCheckApi.md#healthControllerCheck) | **GET** /healthcheck | 
[**healthControllerMetrics**](HealthCheckApi.md#healthControllerMetrics) | **GET** /healthcheck/metrics | 


# **healthControllerCheck**
> HealthControllerCheck200Response healthControllerCheck()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .HealthCheckApi(configuration);

let body:.HealthCheckApiHealthControllerCheckRequest = {
  // any
  REQUEST_SOURCE: null,
  // any
  REQUEST_TOPIC: null,
};

apiInstance.healthControllerCheck(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **REQUEST_SOURCE** | **any** |  | defaults to undefined
 **REQUEST_TOPIC** | **any** |  | defaults to undefined


### Return type

**HealthControllerCheck200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Health Check is successful |  -  |
**503** | The Health Check is not successful |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **healthControllerMetrics**
> void healthControllerMetrics()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .HealthCheckApi(configuration);

let body:.HealthCheckApiHealthControllerMetricsRequest = {
  // any
  REQUEST_SOURCE: null,
  // any
  REQUEST_TOPIC: null,
};

apiInstance.healthControllerMetrics(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **REQUEST_SOURCE** | **any** |  | defaults to undefined
 **REQUEST_TOPIC** | **any** |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


