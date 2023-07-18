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
import { ObservableCPTApi } from './ObservableAPI';

import { CPTApiRequestFactory, CPTApiResponseProcessor} from "../apis/CPTApi";
export class PromiseCPTApi {
    private api: ObservableCPTApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CPTApiRequestFactory,
        responseProcessor?: CPTApiResponseProcessor
    ) {
        this.api = new ObservableCPTApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param id 
     * @param REQUEST_SOURCE 
     * @param REQUEST_TOPIC 
     */
    public cptControllerGetById(id: string, REQUEST_SOURCE: any, REQUEST_TOPIC: any, _options?: Configuration): Promise<CptControllerGetById200Response> {
        const result = this.api.cptControllerGetById(id, REQUEST_SOURCE, REQUEST_TOPIC, _options);
        return result.toPromise();
    }

    /**
     * @param text 
     * @param REQUEST_SOURCE 
     * @param REQUEST_TOPIC 
     * @param limit 
     * @param page 
     */
    public cptControllerSearch(text: string, REQUEST_SOURCE: any, REQUEST_TOPIC: any, limit?: string, page?: string, _options?: Configuration): Promise<CptControllerSearch200Response> {
        const result = this.api.cptControllerSearch(text, REQUEST_SOURCE, REQUEST_TOPIC, limit, page, _options);
        return result.toPromise();
    }


}



import { ObservableHealthCheckApi } from './ObservableAPI';

import { HealthCheckApiRequestFactory, HealthCheckApiResponseProcessor} from "../apis/HealthCheckApi";
export class PromiseHealthCheckApi {
    private api: ObservableHealthCheckApi

    public constructor(
        configuration: Configuration,
        requestFactory?: HealthCheckApiRequestFactory,
        responseProcessor?: HealthCheckApiResponseProcessor
    ) {
        this.api = new ObservableHealthCheckApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param REQUEST_SOURCE 
     * @param REQUEST_TOPIC 
     */
    public healthControllerCheck(REQUEST_SOURCE: any, REQUEST_TOPIC: any, _options?: Configuration): Promise<HealthControllerCheck200Response> {
        const result = this.api.healthControllerCheck(REQUEST_SOURCE, REQUEST_TOPIC, _options);
        return result.toPromise();
    }

    /**
     * @param REQUEST_SOURCE 
     * @param REQUEST_TOPIC 
     */
    public healthControllerMetrics(REQUEST_SOURCE: any, REQUEST_TOPIC: any, _options?: Configuration): Promise<void> {
        const result = this.api.healthControllerMetrics(REQUEST_SOURCE, REQUEST_TOPIC, _options);
        return result.toPromise();
    }


}



import { ObservableICDApi } from './ObservableAPI';

import { ICDApiRequestFactory, ICDApiResponseProcessor} from "../apis/ICDApi";
export class PromiseICDApi {
    private api: ObservableICDApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ICDApiRequestFactory,
        responseProcessor?: ICDApiResponseProcessor
    ) {
        this.api = new ObservableICDApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param id 
     * @param REQUEST_SOURCE 
     * @param REQUEST_TOPIC 
     */
    public icdControllerGetById(id: string, REQUEST_SOURCE: any, REQUEST_TOPIC: any, _options?: Configuration): Promise<IcdControllerGetById200Response> {
        const result = this.api.icdControllerGetById(id, REQUEST_SOURCE, REQUEST_TOPIC, _options);
        return result.toPromise();
    }

    /**
     * @param text 
     * @param REQUEST_SOURCE 
     * @param REQUEST_TOPIC 
     */
    public icdControllerSearch(text: string, REQUEST_SOURCE: any, REQUEST_TOPIC: any, _options?: Configuration): Promise<IcdControllerSearch200Response> {
        const result = this.api.icdControllerSearch(text, REQUEST_SOURCE, REQUEST_TOPIC, _options);
        return result.toPromise();
    }


}



import { ObservableInternalCPTApi } from './ObservableAPI';

import { InternalCPTApiRequestFactory, InternalCPTApiResponseProcessor} from "../apis/InternalCPTApi";
export class PromiseInternalCPTApi {
    private api: ObservableInternalCPTApi

    public constructor(
        configuration: Configuration,
        requestFactory?: InternalCPTApiRequestFactory,
        responseProcessor?: InternalCPTApiResponseProcessor
    ) {
        this.api = new ObservableInternalCPTApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param url 
     * @param REQUEST_SOURCE 
     * @param REQUEST_TOPIC 
     */
    public internalCptControllerImport(url: string, REQUEST_SOURCE: any, REQUEST_TOPIC: any, _options?: Configuration): Promise<InternalCptControllerImport200Response> {
        const result = this.api.internalCptControllerImport(url, REQUEST_SOURCE, REQUEST_TOPIC, _options);
        return result.toPromise();
    }


}



import { ObservableInternalICDApi } from './ObservableAPI';

import { InternalICDApiRequestFactory, InternalICDApiResponseProcessor} from "../apis/InternalICDApi";
export class PromiseInternalICDApi {
    private api: ObservableInternalICDApi

    public constructor(
        configuration: Configuration,
        requestFactory?: InternalICDApiRequestFactory,
        responseProcessor?: InternalICDApiResponseProcessor
    ) {
        this.api = new ObservableInternalICDApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param url 
     * @param REQUEST_SOURCE 
     * @param REQUEST_TOPIC 
     */
    public internalIcdControllerImport(url: string, REQUEST_SOURCE: any, REQUEST_TOPIC: any, _options?: Configuration): Promise<InternalCptControllerImport200Response> {
        const result = this.api.internalIcdControllerImport(url, REQUEST_SOURCE, REQUEST_TOPIC, _options);
        return result.toPromise();
    }


}



import { ObservableInternalLOINCApi } from './ObservableAPI';

import { InternalLOINCApiRequestFactory, InternalLOINCApiResponseProcessor} from "../apis/InternalLOINCApi";
export class PromiseInternalLOINCApi {
    private api: ObservableInternalLOINCApi

    public constructor(
        configuration: Configuration,
        requestFactory?: InternalLOINCApiRequestFactory,
        responseProcessor?: InternalLOINCApiResponseProcessor
    ) {
        this.api = new ObservableInternalLOINCApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param url 
     * @param REQUEST_SOURCE 
     * @param REQUEST_TOPIC 
     */
    public internalLoincControllerImport(url: string, REQUEST_SOURCE: any, REQUEST_TOPIC: any, _options?: Configuration): Promise<InternalCptControllerImport200Response> {
        const result = this.api.internalLoincControllerImport(url, REQUEST_SOURCE, REQUEST_TOPIC, _options);
        return result.toPromise();
    }


}



import { ObservableInternalNDCApi } from './ObservableAPI';

import { InternalNDCApiRequestFactory, InternalNDCApiResponseProcessor} from "../apis/InternalNDCApi";
export class PromiseInternalNDCApi {
    private api: ObservableInternalNDCApi

    public constructor(
        configuration: Configuration,
        requestFactory?: InternalNDCApiRequestFactory,
        responseProcessor?: InternalNDCApiResponseProcessor
    ) {
        this.api = new ObservableInternalNDCApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param url 
     * @param REQUEST_SOURCE 
     * @param REQUEST_TOPIC 
     */
    public internalNdcControllerImport(url: string, REQUEST_SOURCE: any, REQUEST_TOPIC: any, _options?: Configuration): Promise<InternalCptControllerImport200Response> {
        const result = this.api.internalNdcControllerImport(url, REQUEST_SOURCE, REQUEST_TOPIC, _options);
        return result.toPromise();
    }


}



import { ObservableInternalNPIApi } from './ObservableAPI';

import { InternalNPIApiRequestFactory, InternalNPIApiResponseProcessor} from "../apis/InternalNPIApi";
export class PromiseInternalNPIApi {
    private api: ObservableInternalNPIApi

    public constructor(
        configuration: Configuration,
        requestFactory?: InternalNPIApiRequestFactory,
        responseProcessor?: InternalNPIApiResponseProcessor
    ) {
        this.api = new ObservableInternalNPIApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param url 
     * @param REQUEST_SOURCE 
     * @param REQUEST_TOPIC 
     */
    public internalNpiControllerImport(url: string, REQUEST_SOURCE: any, REQUEST_TOPIC: any, _options?: Configuration): Promise<InternalCptControllerImport200Response> {
        const result = this.api.internalNpiControllerImport(url, REQUEST_SOURCE, REQUEST_TOPIC, _options);
        return result.toPromise();
    }

    /**
     * @param url 
     * @param REQUEST_SOURCE 
     * @param REQUEST_TOPIC 
     */
    public internalNpiControllerImportUpdate(url: string, REQUEST_SOURCE: any, REQUEST_TOPIC: any, _options?: Configuration): Promise<InternalCptControllerImport200Response> {
        const result = this.api.internalNpiControllerImportUpdate(url, REQUEST_SOURCE, REQUEST_TOPIC, _options);
        return result.toPromise();
    }


}



import { ObservableLOINCApi } from './ObservableAPI';

import { LOINCApiRequestFactory, LOINCApiResponseProcessor} from "../apis/LOINCApi";
export class PromiseLOINCApi {
    private api: ObservableLOINCApi

    public constructor(
        configuration: Configuration,
        requestFactory?: LOINCApiRequestFactory,
        responseProcessor?: LOINCApiResponseProcessor
    ) {
        this.api = new ObservableLOINCApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param id 
     * @param REQUEST_SOURCE 
     * @param REQUEST_TOPIC 
     */
    public loincControllerGetById(id: string, REQUEST_SOURCE: any, REQUEST_TOPIC: any, _options?: Configuration): Promise<LoincControllerGetById200Response> {
        const result = this.api.loincControllerGetById(id, REQUEST_SOURCE, REQUEST_TOPIC, _options);
        return result.toPromise();
    }

    /**
     * @param text 
     * @param REQUEST_SOURCE 
     * @param REQUEST_TOPIC 
     * @param limit 
     * @param page 
     */
    public loincControllerSearch(text: string, REQUEST_SOURCE: any, REQUEST_TOPIC: any, limit?: string, page?: string, _options?: Configuration): Promise<LoincControllerSearch200Response> {
        const result = this.api.loincControllerSearch(text, REQUEST_SOURCE, REQUEST_TOPIC, limit, page, _options);
        return result.toPromise();
    }


}



import { ObservableNDCApi } from './ObservableAPI';

import { NDCApiRequestFactory, NDCApiResponseProcessor} from "../apis/NDCApi";
export class PromiseNDCApi {
    private api: ObservableNDCApi

    public constructor(
        configuration: Configuration,
        requestFactory?: NDCApiRequestFactory,
        responseProcessor?: NDCApiResponseProcessor
    ) {
        this.api = new ObservableNDCApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param id 
     * @param REQUEST_SOURCE 
     * @param REQUEST_TOPIC 
     */
    public ndcControllerGetById(id: string, REQUEST_SOURCE: any, REQUEST_TOPIC: any, _options?: Configuration): Promise<NdcControllerGetById200Response> {
        const result = this.api.ndcControllerGetById(id, REQUEST_SOURCE, REQUEST_TOPIC, _options);
        return result.toPromise();
    }

    /**
     * @param text 
     * @param REQUEST_SOURCE 
     * @param REQUEST_TOPIC 
     */
    public ndcControllerSearch(text: string, REQUEST_SOURCE: any, REQUEST_TOPIC: any, _options?: Configuration): Promise<NdcControllerSearch200Response> {
        const result = this.api.ndcControllerSearch(text, REQUEST_SOURCE, REQUEST_TOPIC, _options);
        return result.toPromise();
    }


}



import { ObservableNPIApi } from './ObservableAPI';

import { NPIApiRequestFactory, NPIApiResponseProcessor} from "../apis/NPIApi";
export class PromiseNPIApi {
    private api: ObservableNPIApi

    public constructor(
        configuration: Configuration,
        requestFactory?: NPIApiRequestFactory,
        responseProcessor?: NPIApiResponseProcessor
    ) {
        this.api = new ObservableNPIApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param id 
     * @param REQUEST_SOURCE 
     * @param REQUEST_TOPIC 
     */
    public npiControllerGetIndividualById(id: string, REQUEST_SOURCE: any, REQUEST_TOPIC: any, _options?: Configuration): Promise<NpiControllerGetIndividualById200Response> {
        const result = this.api.npiControllerGetIndividualById(id, REQUEST_SOURCE, REQUEST_TOPIC, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     * @param REQUEST_SOURCE 
     * @param REQUEST_TOPIC 
     */
    public npiControllerGetLaboratoryById(id: string, REQUEST_SOURCE: any, REQUEST_TOPIC: any, _options?: Configuration): Promise<NpiControllerGetLaboratoryById200Response> {
        const result = this.api.npiControllerGetLaboratoryById(id, REQUEST_SOURCE, REQUEST_TOPIC, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     * @param REQUEST_SOURCE 
     * @param REQUEST_TOPIC 
     */
    public npiControllerGetPracticeById(id: string, REQUEST_SOURCE: any, REQUEST_TOPIC: any, _options?: Configuration): Promise<NpiControllerGetLaboratoryById200Response> {
        const result = this.api.npiControllerGetPracticeById(id, REQUEST_SOURCE, REQUEST_TOPIC, _options);
        return result.toPromise();
    }

    /**
     * @param text 
     * @param REQUEST_SOURCE 
     * @param REQUEST_TOPIC 
     * @param limit 
     * @param page 
     */
    public npiControllerSearchIndividual(text: string, REQUEST_SOURCE: any, REQUEST_TOPIC: any, limit?: string, page?: string, _options?: Configuration): Promise<NpiControllerSearchIndividual200Response> {
        const result = this.api.npiControllerSearchIndividual(text, REQUEST_SOURCE, REQUEST_TOPIC, limit, page, _options);
        return result.toPromise();
    }

    /**
     * @param text 
     * @param REQUEST_SOURCE 
     * @param REQUEST_TOPIC 
     * @param limit 
     * @param page 
     */
    public npiControllerSearchLaboratory(text: string, REQUEST_SOURCE: any, REQUEST_TOPIC: any, limit?: string, page?: string, _options?: Configuration): Promise<NpiControllerSearchLaboratory200Response> {
        const result = this.api.npiControllerSearchLaboratory(text, REQUEST_SOURCE, REQUEST_TOPIC, limit, page, _options);
        return result.toPromise();
    }

    /**
     * @param text 
     * @param REQUEST_SOURCE 
     * @param REQUEST_TOPIC 
     * @param limit 
     * @param page 
     */
    public npiControllerSearchPractice(text: string, REQUEST_SOURCE: any, REQUEST_TOPIC: any, limit?: string, page?: string, _options?: Configuration): Promise<NpiControllerSearchLaboratory200Response> {
        const result = this.api.npiControllerSearchPractice(text, REQUEST_SOURCE, REQUEST_TOPIC, limit, page, _options);
        return result.toPromise();
    }


}



