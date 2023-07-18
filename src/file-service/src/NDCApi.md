# .NDCApi

All URIs are relative to *http://petstore.swagger.io/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ndcControllerGetById**](NDCApi.md#ndcControllerGetById) | **GET** /api/v1/ndc/{id} | 
[**ndcControllerSearch**](NDCApi.md#ndcControllerSearch) | **GET** /api/v1/ndc/search | 


# **ndcControllerGetById**
> NdcControllerGetById200Response ndcControllerGetById()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NDCApi(configuration);

let body:.NDCApiNdcControllerGetByIdRequest = {
  // string
  id: "66843-011_d673243f-9f5e-1111-e053-2a95a90a8a24",
  // any
  REQUEST_SOURCE: null,
  // any
  REQUEST_TOPIC: null,
};

apiInstance.ndcControllerGetById(body).then((data:any) => {
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

**NdcControllerGetById200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Get NDC By Id successful |  -  |
**404** | The Search NDC By Id Not Found Exception |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **ndcControllerSearch**
> NdcControllerSearch200Response ndcControllerSearch()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NDCApi(configuration);

let body:.NDCApiNdcControllerSearchRequest = {
  // string
  text: "HUMAN",
  // any
  REQUEST_SOURCE: null,
  // any
  REQUEST_TOPIC: null,
};

apiInstance.ndcControllerSearch(body).then((data:any) => {
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

**NdcControllerSearch200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Search NDC successful |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


