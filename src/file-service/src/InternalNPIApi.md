# .InternalNPIApi

All URIs are relative to *http://petstore.swagger.io/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**internalNpiControllerImport**](InternalNPIApi.md#internalNpiControllerImport) | **POST** /api/v1/internal/npi/import/init | 
[**internalNpiControllerImportUpdate**](InternalNPIApi.md#internalNpiControllerImportUpdate) | **POST** /api/v1/internal/npi/import/update | 


# **internalNpiControllerImport**
> InternalCptControllerImport200Response internalNpiControllerImport()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InternalNPIApi(configuration);

let body:.InternalNPIApiInternalNpiControllerImportRequest = {
  // string
  url: "https://download.cms.gov/nppes/NPPES_Data_Dissemination_051523_052123_Weekly.zip",
  // any
  REQUEST_SOURCE: null,
  // any
  REQUEST_TOPIC: null,
};

apiInstance.internalNpiControllerImport(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **url** | [**string**] |  | defaults to undefined
 **REQUEST_SOURCE** | **any** |  | defaults to undefined
 **REQUEST_TOPIC** | **any** |  | defaults to undefined


### Return type

**InternalCptControllerImport200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Import Init successful |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **internalNpiControllerImportUpdate**
> InternalCptControllerImport200Response internalNpiControllerImportUpdate()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InternalNPIApi(configuration);

let body:.InternalNPIApiInternalNpiControllerImportUpdateRequest = {
  // string
  url: "https://download.cms.gov/nppes/NPPES_Data_Dissemination_051523_052123_Weekly.zip",
  // any
  REQUEST_SOURCE: null,
  // any
  REQUEST_TOPIC: null,
};

apiInstance.internalNpiControllerImportUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **url** | [**string**] |  | defaults to undefined
 **REQUEST_SOURCE** | **any** |  | defaults to undefined
 **REQUEST_TOPIC** | **any** |  | defaults to undefined


### Return type

**InternalCptControllerImport200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Import Update successful |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


