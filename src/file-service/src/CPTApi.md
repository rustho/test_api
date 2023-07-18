# .CPTApi

All URIs are relative to *http://petstore.swagger.io/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cptControllerGetById**](CPTApi.md#cptControllerGetById) | **GET** /api/v1/cpt/{id} | 
[**cptControllerSearch**](CPTApi.md#cptControllerSearch) | **GET** /api/v1/cpt/search | 


# **cptControllerGetById**
> CptControllerGetById200Response cptControllerGetById()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CPTApi(configuration);

let body:.CPTApiCptControllerGetByIdRequest = {
  // string
  id: "00000",
  // any
  REQUEST_SOURCE: null,
  // any
  REQUEST_TOPIC: null,
};

apiInstance.cptControllerGetById(body).then((data:any) => {
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

**CptControllerGetById200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Get CPT By Id successful |  -  |
**404** | The Search CPT By Id Not Found Exception |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **cptControllerSearch**
> CptControllerSearch200Response cptControllerSearch()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CPTApi(configuration);

let body:.CPTApiCptControllerSearchRequest = {
  // string
  text: "Agriflu vaccine",
  // any
  REQUEST_SOURCE: null,
  // any
  REQUEST_TOPIC: null,
  // string (optional)
  limit: "25",
  // string (optional)
  page: "1",
};

apiInstance.cptControllerSearch(body).then((data:any) => {
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

**CptControllerSearch200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Search CPT successful |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


