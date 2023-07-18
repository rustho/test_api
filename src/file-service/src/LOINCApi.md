# .LOINCApi

All URIs are relative to *http://petstore.swagger.io/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**loincControllerGetById**](LOINCApi.md#loincControllerGetById) | **GET** /api/v1/loinc/{id} | 
[**loincControllerSearch**](LOINCApi.md#loincControllerSearch) | **GET** /api/v1/loinc/search | 


# **loincControllerGetById**
> LoincControllerGetById200Response loincControllerGetById()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LOINCApi(configuration);

let body:.LOINCApiLoincControllerGetByIdRequest = {
  // string
  id: "10002-4",
  // any
  REQUEST_SOURCE: null,
  // any
  REQUEST_TOPIC: null,
};

apiInstance.loincControllerGetById(body).then((data:any) => {
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

**LoincControllerGetById200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Get Loinc By Id successful |  -  |
**404** | The Search Loinc By Id Not Found Exception |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **loincControllerSearch**
> LoincControllerSearch200Response loincControllerSearch()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LOINCApi(configuration);

let body:.LOINCApiLoincControllerSearchRequest = {
  // string
  text: "wave",
  // any
  REQUEST_SOURCE: null,
  // any
  REQUEST_TOPIC: null,
  // string (optional)
  limit: "25",
  // string (optional)
  page: "1",
};

apiInstance.loincControllerSearch(body).then((data:any) => {
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

**LoincControllerSearch200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Search Loinc successful |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


