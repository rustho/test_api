# .ICDApi

All URIs are relative to *http://petstore.swagger.io/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**icdControllerGetById**](ICDApi.md#icdControllerGetById) | **GET** /api/v1/icd/{id} | 
[**icdControllerSearch**](ICDApi.md#icdControllerSearch) | **GET** /api/v1/icd/search | 


# **icdControllerGetById**
> IcdControllerGetById200Response icdControllerGetById()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ICDApi(configuration);

let body:.ICDApiIcdControllerGetByIdRequest = {
  // string
  id: "A00.0",
  // any
  REQUEST_SOURCE: null,
  // any
  REQUEST_TOPIC: null,
};

apiInstance.icdControllerGetById(body).then((data:any) => {
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

**IcdControllerGetById200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Get ICD By Id successful |  -  |
**404** | The Search ICD By Id Not Found Exception |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **icdControllerSearch**
> IcdControllerSearch200Response icdControllerSearch()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ICDApi(configuration);

let body:.ICDApiIcdControllerSearchRequest = {
  // string
  text: "Typhoid",
  // any
  REQUEST_SOURCE: null,
  // any
  REQUEST_TOPIC: null,
};

apiInstance.icdControllerSearch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **text** | [**string**] |  | defaults to undefined
 **REQUEST_SOURCE** | **any** |  | defaults to undefined
 **REQUEST_TOPIC** | **any** |  | defaults to undefined


### Return type

**IcdControllerSearch200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Search ICD successful |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


