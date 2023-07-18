# .NPIApi

All URIs are relative to *http://petstore.swagger.io/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**npiControllerGetIndividualById**](NPIApi.md#npiControllerGetIndividualById) | **GET** /api/v1/npi/individual/{id} | 
[**npiControllerGetLaboratoryById**](NPIApi.md#npiControllerGetLaboratoryById) | **GET** /api/v1/npi/laboratory/{id} | 
[**npiControllerGetPracticeById**](NPIApi.md#npiControllerGetPracticeById) | **GET** /api/v1/npi/practice/{id} | 
[**npiControllerSearchIndividual**](NPIApi.md#npiControllerSearchIndividual) | **GET** /api/v1/npi/individual/search | 
[**npiControllerSearchLaboratory**](NPIApi.md#npiControllerSearchLaboratory) | **GET** /api/v1/npi/laboratory/search | 
[**npiControllerSearchPractice**](NPIApi.md#npiControllerSearchPractice) | **GET** /api/v1/npi/practice/search | 


# **npiControllerGetIndividualById**
> NpiControllerGetIndividualById200Response npiControllerGetIndividualById()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NPIApi(configuration);

let body:.NPIApiNpiControllerGetIndividualByIdRequest = {
  // string
  id: "0000000000",
  // any
  REQUEST_SOURCE: null,
  // any
  REQUEST_TOPIC: null,
};

apiInstance.npiControllerGetIndividualById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined
 **REQUEST_SOURCE** | **any** |  | defaults to undefined
 **REQUEST_TOPIC** | **any** |  | defaults to undefined


### Return type

**NpiControllerGetIndividualById200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Get NPI Individual By Id successful |  -  |
**400** | The Search NPI Individual By Id Bad Request Exception |  -  |
**404** | The Search NPI Individual By Id Not Found Exception |  -  |
**500** | The Search NPI Individual By Id Internal Server Exception |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **npiControllerGetLaboratoryById**
> NpiControllerGetLaboratoryById200Response npiControllerGetLaboratoryById()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NPIApi(configuration);

let body:.NPIApiNpiControllerGetLaboratoryByIdRequest = {
  // string
  id: "0000000000",
  // any
  REQUEST_SOURCE: null,
  // any
  REQUEST_TOPIC: null,
};

apiInstance.npiControllerGetLaboratoryById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined
 **REQUEST_SOURCE** | **any** |  | defaults to undefined
 **REQUEST_TOPIC** | **any** |  | defaults to undefined


### Return type

**NpiControllerGetLaboratoryById200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Get NPI Laboratory By Id successful |  -  |
**400** | The Search NPI Laboratory By Id Bad Request Exception |  -  |
**404** | The Search NPI Laboratory By Id Not Found Exception |  -  |
**500** | The Search NPI Laboratory By Id Internal Server Exception |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **npiControllerGetPracticeById**
> NpiControllerGetLaboratoryById200Response npiControllerGetPracticeById()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NPIApi(configuration);

let body:.NPIApiNpiControllerGetPracticeByIdRequest = {
  // string
  id: "0000000000",
  // any
  REQUEST_SOURCE: null,
  // any
  REQUEST_TOPIC: null,
};

apiInstance.npiControllerGetPracticeById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined
 **REQUEST_SOURCE** | **any** |  | defaults to undefined
 **REQUEST_TOPIC** | **any** |  | defaults to undefined


### Return type

**NpiControllerGetLaboratoryById200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Get NPI Practice By Id successful |  -  |
**400** | The Search NPI Practice By Id Bad Request Exception |  -  |
**404** | The Search NPI Practice By Id Not Found Exception |  -  |
**500** | The Search NPI Practice By Id Internal Server Exception |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **npiControllerSearchIndividual**
> NpiControllerSearchIndividual200Response npiControllerSearchIndividual()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NPIApi(configuration);

let body:.NPIApiNpiControllerSearchIndividualRequest = {
  // string
  text: "JOHN",
  // any
  REQUEST_SOURCE: null,
  // any
  REQUEST_TOPIC: null,
  // string (optional)
  limit: "25",
  // string (optional)
  page: "1",
};

apiInstance.npiControllerSearchIndividual(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **text** | [**string**] |  | defaults to undefined
 **REQUEST_SOURCE** | **any** |  | defaults to undefined
 **REQUEST_TOPIC** | **any** |  | defaults to undefined
 **limit** | [**string**] |  | (optional) defaults to '25'
 **page** | [**string**] |  | (optional) defaults to '1'


### Return type

**NpiControllerSearchIndividual200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Search NPI Individual successful |  -  |
**500** | The Search NPI Individual By Id Internal Server Exception |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **npiControllerSearchLaboratory**
> NpiControllerSearchLaboratory200Response npiControllerSearchLaboratory()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NPIApi(configuration);

let body:.NPIApiNpiControllerSearchLaboratoryRequest = {
  // string
  text: "JOHN",
  // any
  REQUEST_SOURCE: null,
  // any
  REQUEST_TOPIC: null,
  // string (optional)
  limit: "25",
  // string (optional)
  page: "1",
};

apiInstance.npiControllerSearchLaboratory(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **text** | [**string**] |  | defaults to undefined
 **REQUEST_SOURCE** | **any** |  | defaults to undefined
 **REQUEST_TOPIC** | **any** |  | defaults to undefined
 **limit** | [**string**] |  | (optional) defaults to '25'
 **page** | [**string**] |  | (optional) defaults to '1'


### Return type

**NpiControllerSearchLaboratory200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Search NPI Laboratory successful |  -  |
**500** | The Search NPI Laboratory By Id Internal Server Exception |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **npiControllerSearchPractice**
> NpiControllerSearchLaboratory200Response npiControllerSearchPractice()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NPIApi(configuration);

let body:.NPIApiNpiControllerSearchPracticeRequest = {
  // string
  text: "JOHN",
  // any
  REQUEST_SOURCE: null,
  // any
  REQUEST_TOPIC: null,
  // string (optional)
  limit: "25",
  // string (optional)
  page: "1",
};

apiInstance.npiControllerSearchPractice(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **text** | [**string**] |  | defaults to undefined
 **REQUEST_SOURCE** | **any** |  | defaults to undefined
 **REQUEST_TOPIC** | **any** |  | defaults to undefined
 **limit** | [**string**] |  | (optional) defaults to '25'
 **page** | [**string**] |  | (optional) defaults to '1'


### Return type

**NpiControllerSearchLaboratory200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Search NPI Practice successful |  -  |
**500** | The Search NPI Practice By Id Internal Server Exception |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


