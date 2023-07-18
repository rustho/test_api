import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'

import { CptControllerGetById200Response } from '../models/CptControllerGetById200Response';
import { CptControllerGetById404Response } from '../models/CptControllerGetById404Response';
import { CptControllerSearch200Response } from '../models/CptControllerSearch200Response';
import { CptDto } from '../models/CptDto';
import { HealthControllerCheck200Response } from '../models/HealthControllerCheck200Response';
import { HealthControllerCheck200ResponseInfoValue } from '../models/HealthControllerCheck200ResponseInfoValue';
import { HealthControllerCheck503Response } from '../models/HealthControllerCheck503Response';
import { IcdControllerGetById200Response } from '../models/IcdControllerGetById200Response';
import { IcdControllerGetById404Response } from '../models/IcdControllerGetById404Response';
import { IcdControllerSearch200Response } from '../models/IcdControllerSearch200Response';
import { IcdDto } from '../models/IcdDto';
import { InternalCptControllerImport200Response } from '../models/InternalCptControllerImport200Response';
import { InternalCptControllerImport200ResponseResult } from '../models/InternalCptControllerImport200ResponseResult';
import { LoincControllerGetById200Response } from '../models/LoincControllerGetById200Response';
import { LoincControllerGetById404Response } from '../models/LoincControllerGetById404Response';
import { LoincControllerSearch200Response } from '../models/LoincControllerSearch200Response';
import { LoincDto } from '../models/LoincDto';
import { NdcControllerGetById200Response } from '../models/NdcControllerGetById200Response';
import { NdcControllerGetById404Response } from '../models/NdcControllerGetById404Response';
import { NdcControllerSearch200Response } from '../models/NdcControllerSearch200Response';
import { NdcDto } from '../models/NdcDto';
import { NpiControllerGetIndividualById200Response } from '../models/NpiControllerGetIndividualById200Response';
import { NpiControllerGetIndividualById400Response } from '../models/NpiControllerGetIndividualById400Response';
import { NpiControllerGetIndividualById404Response } from '../models/NpiControllerGetIndividualById404Response';
import { NpiControllerGetIndividualById500Response } from '../models/NpiControllerGetIndividualById500Response';
import { NpiControllerGetLaboratoryById200Response } from '../models/NpiControllerGetLaboratoryById200Response';
import { NpiControllerGetLaboratoryById404Response } from '../models/NpiControllerGetLaboratoryById404Response';
import { NpiControllerGetPracticeById404Response } from '../models/NpiControllerGetPracticeById404Response';
import { NpiControllerSearchIndividual200Response } from '../models/NpiControllerSearchIndividual200Response';
import { NpiControllerSearchLaboratory200Response } from '../models/NpiControllerSearchLaboratory200Response';
import { NpiIndividualDto } from '../models/NpiIndividualDto';
import { NpiOrganizationDto } from '../models/NpiOrganizationDto';

import { ObservableCPTApi } from "./ObservableAPI";
import { CPTApiRequestFactory, CPTApiResponseProcessor} from "../apis/CPTApi";

export interface CPTApiCptControllerGetByIdRequest {
    /**
     * 
     * @type string
     * @memberof CPTApicptControllerGetById
     */
    id: string
    /**
     * 
     * @type any
     * @memberof CPTApicptControllerGetById
     */
    REQUEST_SOURCE: any
    /**
     * 
     * @type any
     * @memberof CPTApicptControllerGetById
     */
    REQUEST_TOPIC: any
}

export interface CPTApiCptControllerSearchRequest {
    /**
     * 
     * @type string
     * @memberof CPTApicptControllerSearch
     */
    text: string
    /**
     * 
     * @type any
     * @memberof CPTApicptControllerSearch
     */
    REQUEST_SOURCE: any
    /**
     * 
     * @type any
     * @memberof CPTApicptControllerSearch
     */
    REQUEST_TOPIC: any
    /**
     * 
     * @type string
     * @memberof CPTApicptControllerSearch
     */
    limit?: string
    /**
     * 
     * @type string
     * @memberof CPTApicptControllerSearch
     */
    page?: string
}

export class ObjectCPTApi {
    private api: ObservableCPTApi

    public constructor(configuration: Configuration, requestFactory?: CPTApiRequestFactory, responseProcessor?: CPTApiResponseProcessor) {
        this.api = new ObservableCPTApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public cptControllerGetById(param: CPTApiCptControllerGetByIdRequest, options?: Configuration): Promise<CptControllerGetById200Response> {
        return this.api.cptControllerGetById(param.id, param.REQUEST_SOURCE, param.REQUEST_TOPIC,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public cptControllerSearch(param: CPTApiCptControllerSearchRequest, options?: Configuration): Promise<CptControllerSearch200Response> {
        return this.api.cptControllerSearch(param.text, param.REQUEST_SOURCE, param.REQUEST_TOPIC, param.limit, param.page,  options).toPromise();
    }

}

import { ObservableHealthCheckApi } from "./ObservableAPI";
import { HealthCheckApiRequestFactory, HealthCheckApiResponseProcessor} from "../apis/HealthCheckApi";

export interface HealthCheckApiHealthControllerCheckRequest {
    /**
     * 
     * @type any
     * @memberof HealthCheckApihealthControllerCheck
     */
    REQUEST_SOURCE: any
    /**
     * 
     * @type any
     * @memberof HealthCheckApihealthControllerCheck
     */
    REQUEST_TOPIC: any
}

export interface HealthCheckApiHealthControllerMetricsRequest {
    /**
     * 
     * @type any
     * @memberof HealthCheckApihealthControllerMetrics
     */
    REQUEST_SOURCE: any
    /**
     * 
     * @type any
     * @memberof HealthCheckApihealthControllerMetrics
     */
    REQUEST_TOPIC: any
}

export class ObjectHealthCheckApi {
    private api: ObservableHealthCheckApi

    public constructor(configuration: Configuration, requestFactory?: HealthCheckApiRequestFactory, responseProcessor?: HealthCheckApiResponseProcessor) {
        this.api = new ObservableHealthCheckApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public healthControllerCheck(param: HealthCheckApiHealthControllerCheckRequest, options?: Configuration): Promise<HealthControllerCheck200Response> {
        return this.api.healthControllerCheck(param.REQUEST_SOURCE, param.REQUEST_TOPIC,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public healthControllerMetrics(param: HealthCheckApiHealthControllerMetricsRequest, options?: Configuration): Promise<void> {
        return this.api.healthControllerMetrics(param.REQUEST_SOURCE, param.REQUEST_TOPIC,  options).toPromise();
    }

}

import { ObservableICDApi } from "./ObservableAPI";
import { ICDApiRequestFactory, ICDApiResponseProcessor} from "../apis/ICDApi";

export interface ICDApiIcdControllerGetByIdRequest {
    /**
     * 
     * @type string
     * @memberof ICDApiicdControllerGetById
     */
    id: string
    /**
     * 
     * @type any
     * @memberof ICDApiicdControllerGetById
     */
    REQUEST_SOURCE: any
    /**
     * 
     * @type any
     * @memberof ICDApiicdControllerGetById
     */
    REQUEST_TOPIC: any
}

export interface ICDApiIcdControllerSearchRequest {
    /**
     * 
     * @type string
     * @memberof ICDApiicdControllerSearch
     */
    text: string
    /**
     * 
     * @type any
     * @memberof ICDApiicdControllerSearch
     */
    REQUEST_SOURCE: any
    /**
     * 
     * @type any
     * @memberof ICDApiicdControllerSearch
     */
    REQUEST_TOPIC: any
}

export class ObjectICDApi {
    private api: ObservableICDApi

    public constructor(configuration: Configuration, requestFactory?: ICDApiRequestFactory, responseProcessor?: ICDApiResponseProcessor) {
        this.api = new ObservableICDApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public icdControllerGetById(param: ICDApiIcdControllerGetByIdRequest, options?: Configuration): Promise<IcdControllerGetById200Response> {
        return this.api.icdControllerGetById(param.id, param.REQUEST_SOURCE, param.REQUEST_TOPIC,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public icdControllerSearch(param: ICDApiIcdControllerSearchRequest, options?: Configuration): Promise<IcdControllerSearch200Response> {
        return this.api.icdControllerSearch(param.text, param.REQUEST_SOURCE, param.REQUEST_TOPIC,  options).toPromise();
    }

}

import { ObservableInternalCPTApi } from "./ObservableAPI";
import { InternalCPTApiRequestFactory, InternalCPTApiResponseProcessor} from "../apis/InternalCPTApi";

export interface InternalCPTApiInternalCptControllerImportRequest {
    /**
     * 
     * @type string
     * @memberof InternalCPTApiinternalCptControllerImport
     */
    url: string
    /**
     * 
     * @type any
     * @memberof InternalCPTApiinternalCptControllerImport
     */
    REQUEST_SOURCE: any
    /**
     * 
     * @type any
     * @memberof InternalCPTApiinternalCptControllerImport
     */
    REQUEST_TOPIC: any
}

export class ObjectInternalCPTApi {
    private api: ObservableInternalCPTApi

    public constructor(configuration: Configuration, requestFactory?: InternalCPTApiRequestFactory, responseProcessor?: InternalCPTApiResponseProcessor) {
        this.api = new ObservableInternalCPTApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public internalCptControllerImport(param: InternalCPTApiInternalCptControllerImportRequest, options?: Configuration): Promise<InternalCptControllerImport200Response> {
        return this.api.internalCptControllerImport(param.url, param.REQUEST_SOURCE, param.REQUEST_TOPIC,  options).toPromise();
    }

}

import { ObservableInternalICDApi } from "./ObservableAPI";
import { InternalICDApiRequestFactory, InternalICDApiResponseProcessor} from "../apis/InternalICDApi";

export interface InternalICDApiInternalIcdControllerImportRequest {
    /**
     * 
     * @type string
     * @memberof InternalICDApiinternalIcdControllerImport
     */
    url: string
    /**
     * 
     * @type any
     * @memberof InternalICDApiinternalIcdControllerImport
     */
    REQUEST_SOURCE: any
    /**
     * 
     * @type any
     * @memberof InternalICDApiinternalIcdControllerImport
     */
    REQUEST_TOPIC: any
}

export class ObjectInternalICDApi {
    private api: ObservableInternalICDApi

    public constructor(configuration: Configuration, requestFactory?: InternalICDApiRequestFactory, responseProcessor?: InternalICDApiResponseProcessor) {
        this.api = new ObservableInternalICDApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public internalIcdControllerImport(param: InternalICDApiInternalIcdControllerImportRequest, options?: Configuration): Promise<InternalCptControllerImport200Response> {
        return this.api.internalIcdControllerImport(param.url, param.REQUEST_SOURCE, param.REQUEST_TOPIC,  options).toPromise();
    }

}

import { ObservableInternalLOINCApi } from "./ObservableAPI";
import { InternalLOINCApiRequestFactory, InternalLOINCApiResponseProcessor} from "../apis/InternalLOINCApi";

export interface InternalLOINCApiInternalLoincControllerImportRequest {
    /**
     * 
     * @type string
     * @memberof InternalLOINCApiinternalLoincControllerImport
     */
    url: string
    /**
     * 
     * @type any
     * @memberof InternalLOINCApiinternalLoincControllerImport
     */
    REQUEST_SOURCE: any
    /**
     * 
     * @type any
     * @memberof InternalLOINCApiinternalLoincControllerImport
     */
    REQUEST_TOPIC: any
}

export class ObjectInternalLOINCApi {
    private api: ObservableInternalLOINCApi

    public constructor(configuration: Configuration, requestFactory?: InternalLOINCApiRequestFactory, responseProcessor?: InternalLOINCApiResponseProcessor) {
        this.api = new ObservableInternalLOINCApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public internalLoincControllerImport(param: InternalLOINCApiInternalLoincControllerImportRequest, options?: Configuration): Promise<InternalCptControllerImport200Response> {
        return this.api.internalLoincControllerImport(param.url, param.REQUEST_SOURCE, param.REQUEST_TOPIC,  options).toPromise();
    }

}

import { ObservableInternalNDCApi } from "./ObservableAPI";
import { InternalNDCApiRequestFactory, InternalNDCApiResponseProcessor} from "../apis/InternalNDCApi";

export interface InternalNDCApiInternalNdcControllerImportRequest {
    /**
     * 
     * @type string
     * @memberof InternalNDCApiinternalNdcControllerImport
     */
    url: string
    /**
     * 
     * @type any
     * @memberof InternalNDCApiinternalNdcControllerImport
     */
    REQUEST_SOURCE: any
    /**
     * 
     * @type any
     * @memberof InternalNDCApiinternalNdcControllerImport
     */
    REQUEST_TOPIC: any
}

export class ObjectInternalNDCApi {
    private api: ObservableInternalNDCApi

    public constructor(configuration: Configuration, requestFactory?: InternalNDCApiRequestFactory, responseProcessor?: InternalNDCApiResponseProcessor) {
        this.api = new ObservableInternalNDCApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public internalNdcControllerImport(param: InternalNDCApiInternalNdcControllerImportRequest, options?: Configuration): Promise<InternalCptControllerImport200Response> {
        return this.api.internalNdcControllerImport(param.url, param.REQUEST_SOURCE, param.REQUEST_TOPIC,  options).toPromise();
    }

}

import { ObservableInternalNPIApi } from "./ObservableAPI";
import { InternalNPIApiRequestFactory, InternalNPIApiResponseProcessor} from "../apis/InternalNPIApi";

export interface InternalNPIApiInternalNpiControllerImportRequest {
    /**
     * 
     * @type string
     * @memberof InternalNPIApiinternalNpiControllerImport
     */
    url: string
    /**
     * 
     * @type any
     * @memberof InternalNPIApiinternalNpiControllerImport
     */
    REQUEST_SOURCE: any
    /**
     * 
     * @type any
     * @memberof InternalNPIApiinternalNpiControllerImport
     */
    REQUEST_TOPIC: any
}

export interface InternalNPIApiInternalNpiControllerImportUpdateRequest {
    /**
     * 
     * @type string
     * @memberof InternalNPIApiinternalNpiControllerImportUpdate
     */
    url: string
    /**
     * 
     * @type any
     * @memberof InternalNPIApiinternalNpiControllerImportUpdate
     */
    REQUEST_SOURCE: any
    /**
     * 
     * @type any
     * @memberof InternalNPIApiinternalNpiControllerImportUpdate
     */
    REQUEST_TOPIC: any
}

export class ObjectInternalNPIApi {
    private api: ObservableInternalNPIApi

    public constructor(configuration: Configuration, requestFactory?: InternalNPIApiRequestFactory, responseProcessor?: InternalNPIApiResponseProcessor) {
        this.api = new ObservableInternalNPIApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public internalNpiControllerImport(param: InternalNPIApiInternalNpiControllerImportRequest, options?: Configuration): Promise<InternalCptControllerImport200Response> {
        return this.api.internalNpiControllerImport(param.url, param.REQUEST_SOURCE, param.REQUEST_TOPIC,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public internalNpiControllerImportUpdate(param: InternalNPIApiInternalNpiControllerImportUpdateRequest, options?: Configuration): Promise<InternalCptControllerImport200Response> {
        return this.api.internalNpiControllerImportUpdate(param.url, param.REQUEST_SOURCE, param.REQUEST_TOPIC,  options).toPromise();
    }

}

import { ObservableLOINCApi } from "./ObservableAPI";
import { LOINCApiRequestFactory, LOINCApiResponseProcessor} from "../apis/LOINCApi";

export interface LOINCApiLoincControllerGetByIdRequest {
    /**
     * 
     * @type string
     * @memberof LOINCApiloincControllerGetById
     */
    id: string
    /**
     * 
     * @type any
     * @memberof LOINCApiloincControllerGetById
     */
    REQUEST_SOURCE: any
    /**
     * 
     * @type any
     * @memberof LOINCApiloincControllerGetById
     */
    REQUEST_TOPIC: any
}

export interface LOINCApiLoincControllerSearchRequest {
    /**
     * 
     * @type string
     * @memberof LOINCApiloincControllerSearch
     */
    text: string
    /**
     * 
     * @type any
     * @memberof LOINCApiloincControllerSearch
     */
    REQUEST_SOURCE: any
    /**
     * 
     * @type any
     * @memberof LOINCApiloincControllerSearch
     */
    REQUEST_TOPIC: any
    /**
     * 
     * @type string
     * @memberof LOINCApiloincControllerSearch
     */
    limit?: string
    /**
     * 
     * @type string
     * @memberof LOINCApiloincControllerSearch
     */
    page?: string
}

export class ObjectLOINCApi {
    private api: ObservableLOINCApi

    public constructor(configuration: Configuration, requestFactory?: LOINCApiRequestFactory, responseProcessor?: LOINCApiResponseProcessor) {
        this.api = new ObservableLOINCApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public loincControllerGetById(param: LOINCApiLoincControllerGetByIdRequest, options?: Configuration): Promise<LoincControllerGetById200Response> {
        return this.api.loincControllerGetById(param.id, param.REQUEST_SOURCE, param.REQUEST_TOPIC,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public loincControllerSearch(param: LOINCApiLoincControllerSearchRequest, options?: Configuration): Promise<LoincControllerSearch200Response> {
        return this.api.loincControllerSearch(param.text, param.REQUEST_SOURCE, param.REQUEST_TOPIC, param.limit, param.page,  options).toPromise();
    }

}

import { ObservableNDCApi } from "./ObservableAPI";
import { NDCApiRequestFactory, NDCApiResponseProcessor} from "../apis/NDCApi";

export interface NDCApiNdcControllerGetByIdRequest {
    /**
     * 
     * @type string
     * @memberof NDCApindcControllerGetById
     */
    id: string
    /**
     * 
     * @type any
     * @memberof NDCApindcControllerGetById
     */
    REQUEST_SOURCE: any
    /**
     * 
     * @type any
     * @memberof NDCApindcControllerGetById
     */
    REQUEST_TOPIC: any
}

export interface NDCApiNdcControllerSearchRequest {
    /**
     * 
     * @type string
     * @memberof NDCApindcControllerSearch
     */
    text: string
    /**
     * 
     * @type any
     * @memberof NDCApindcControllerSearch
     */
    REQUEST_SOURCE: any
    /**
     * 
     * @type any
     * @memberof NDCApindcControllerSearch
     */
    REQUEST_TOPIC: any
}

export class ObjectNDCApi {
    private api: ObservableNDCApi

    public constructor(configuration: Configuration, requestFactory?: NDCApiRequestFactory, responseProcessor?: NDCApiResponseProcessor) {
        this.api = new ObservableNDCApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public ndcControllerGetById(param: NDCApiNdcControllerGetByIdRequest, options?: Configuration): Promise<NdcControllerGetById200Response> {
        return this.api.ndcControllerGetById(param.id, param.REQUEST_SOURCE, param.REQUEST_TOPIC,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public ndcControllerSearch(param: NDCApiNdcControllerSearchRequest, options?: Configuration): Promise<NdcControllerSearch200Response> {
        return this.api.ndcControllerSearch(param.text, param.REQUEST_SOURCE, param.REQUEST_TOPIC,  options).toPromise();
    }

}

import { ObservableNPIApi } from "./ObservableAPI";
import { NPIApiRequestFactory, NPIApiResponseProcessor} from "../apis/NPIApi";

export interface NPIApiNpiControllerGetIndividualByIdRequest {
    /**
     * 
     * @type string
     * @memberof NPIApinpiControllerGetIndividualById
     */
    id: string
    /**
     * 
     * @type any
     * @memberof NPIApinpiControllerGetIndividualById
     */
    REQUEST_SOURCE: any
    /**
     * 
     * @type any
     * @memberof NPIApinpiControllerGetIndividualById
     */
    REQUEST_TOPIC: any
}

export interface NPIApiNpiControllerGetLaboratoryByIdRequest {
    /**
     * 
     * @type string
     * @memberof NPIApinpiControllerGetLaboratoryById
     */
    id: string
    /**
     * 
     * @type any
     * @memberof NPIApinpiControllerGetLaboratoryById
     */
    REQUEST_SOURCE: any
    /**
     * 
     * @type any
     * @memberof NPIApinpiControllerGetLaboratoryById
     */
    REQUEST_TOPIC: any
}

export interface NPIApiNpiControllerGetPracticeByIdRequest {
    /**
     * 
     * @type string
     * @memberof NPIApinpiControllerGetPracticeById
     */
    id: string
    /**
     * 
     * @type any
     * @memberof NPIApinpiControllerGetPracticeById
     */
    REQUEST_SOURCE: any
    /**
     * 
     * @type any
     * @memberof NPIApinpiControllerGetPracticeById
     */
    REQUEST_TOPIC: any
}

export interface NPIApiNpiControllerSearchIndividualRequest {
    /**
     * 
     * @type string
     * @memberof NPIApinpiControllerSearchIndividual
     */
    text: string
    /**
     * 
     * @type any
     * @memberof NPIApinpiControllerSearchIndividual
     */
    REQUEST_SOURCE: any
    /**
     * 
     * @type any
     * @memberof NPIApinpiControllerSearchIndividual
     */
    REQUEST_TOPIC: any
    /**
     * 
     * @type string
     * @memberof NPIApinpiControllerSearchIndividual
     */
    limit?: string
    /**
     * 
     * @type string
     * @memberof NPIApinpiControllerSearchIndividual
     */
    page?: string
}

export interface NPIApiNpiControllerSearchLaboratoryRequest {
    /**
     * 
     * @type string
     * @memberof NPIApinpiControllerSearchLaboratory
     */
    text: string
    /**
     * 
     * @type any
     * @memberof NPIApinpiControllerSearchLaboratory
     */
    REQUEST_SOURCE: any
    /**
     * 
     * @type any
     * @memberof NPIApinpiControllerSearchLaboratory
     */
    REQUEST_TOPIC: any
    /**
     * 
     * @type string
     * @memberof NPIApinpiControllerSearchLaboratory
     */
    limit?: string
    /**
     * 
     * @type string
     * @memberof NPIApinpiControllerSearchLaboratory
     */
    page?: string
}

export interface NPIApiNpiControllerSearchPracticeRequest {
    /**
     * 
     * @type string
     * @memberof NPIApinpiControllerSearchPractice
     */
    text: string
    /**
     * 
     * @type any
     * @memberof NPIApinpiControllerSearchPractice
     */
    REQUEST_SOURCE: any
    /**
     * 
     * @type any
     * @memberof NPIApinpiControllerSearchPractice
     */
    REQUEST_TOPIC: any
    /**
     * 
     * @type string
     * @memberof NPIApinpiControllerSearchPractice
     */
    limit?: string
    /**
     * 
     * @type string
     * @memberof NPIApinpiControllerSearchPractice
     */
    page?: string
}

export class ObjectNPIApi {
    private api: ObservableNPIApi

    public constructor(configuration: Configuration, requestFactory?: NPIApiRequestFactory, responseProcessor?: NPIApiResponseProcessor) {
        this.api = new ObservableNPIApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public npiControllerGetIndividualById(param: NPIApiNpiControllerGetIndividualByIdRequest, options?: Configuration): Promise<NpiControllerGetIndividualById200Response> {
        return this.api.npiControllerGetIndividualById(param.id, param.REQUEST_SOURCE, param.REQUEST_TOPIC,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public npiControllerGetLaboratoryById(param: NPIApiNpiControllerGetLaboratoryByIdRequest, options?: Configuration): Promise<NpiControllerGetLaboratoryById200Response> {
        return this.api.npiControllerGetLaboratoryById(param.id, param.REQUEST_SOURCE, param.REQUEST_TOPIC,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public npiControllerGetPracticeById(param: NPIApiNpiControllerGetPracticeByIdRequest, options?: Configuration): Promise<NpiControllerGetLaboratoryById200Response> {
        return this.api.npiControllerGetPracticeById(param.id, param.REQUEST_SOURCE, param.REQUEST_TOPIC,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public npiControllerSearchIndividual(param: NPIApiNpiControllerSearchIndividualRequest, options?: Configuration): Promise<NpiControllerSearchIndividual200Response> {
        return this.api.npiControllerSearchIndividual(param.text, param.REQUEST_SOURCE, param.REQUEST_TOPIC, param.limit, param.page,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public npiControllerSearchLaboratory(param: NPIApiNpiControllerSearchLaboratoryRequest, options?: Configuration): Promise<NpiControllerSearchLaboratory200Response> {
        return this.api.npiControllerSearchLaboratory(param.text, param.REQUEST_SOURCE, param.REQUEST_TOPIC, param.limit, param.page,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public npiControllerSearchPractice(param: NPIApiNpiControllerSearchPracticeRequest, options?: Configuration): Promise<NpiControllerSearchLaboratory200Response> {
        return this.api.npiControllerSearchPractice(param.text, param.REQUEST_SOURCE, param.REQUEST_TOPIC, param.limit, param.page,  options).toPromise();
    }

}
