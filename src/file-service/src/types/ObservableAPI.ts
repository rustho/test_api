import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { CPTApiRequestFactory, CPTApiResponseProcessor} from "../apis/CPTApi";
export class ObservableCPTApi {
    private requestFactory: CPTApiRequestFactory;
    private responseProcessor: CPTApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CPTApiRequestFactory,
        responseProcessor?: CPTApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CPTApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CPTApiResponseProcessor();
    }

    /**
     * @param id 
     * @param REQUEST_SOURCE 
     * @param REQUEST_TOPIC 
     */
    public cptControllerGetById(id: string, REQUEST_SOURCE: any, REQUEST_TOPIC: any, _options?: Configuration): Observable<CptControllerGetById200Response> {
        const requestContextPromise = this.requestFactory.cptControllerGetById(id, REQUEST_SOURCE, REQUEST_TOPIC, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cptControllerGetById(rsp)));
            }));
    }

    /**
     * @param text 
     * @param REQUEST_SOURCE 
     * @param REQUEST_TOPIC 
     * @param limit 
     * @param page 
     */
    public cptControllerSearch(text: string, REQUEST_SOURCE: any, REQUEST_TOPIC: any, limit?: string, page?: string, _options?: Configuration): Observable<CptControllerSearch200Response> {
        const requestContextPromise = this.requestFactory.cptControllerSearch(text, REQUEST_SOURCE, REQUEST_TOPIC, limit, page, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cptControllerSearch(rsp)));
            }));
    }

}

import { HealthCheckApiRequestFactory, HealthCheckApiResponseProcessor} from "../apis/HealthCheckApi";
export class ObservableHealthCheckApi {
    private requestFactory: HealthCheckApiRequestFactory;
    private responseProcessor: HealthCheckApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: HealthCheckApiRequestFactory,
        responseProcessor?: HealthCheckApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new HealthCheckApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new HealthCheckApiResponseProcessor();
    }

    /**
     * @param REQUEST_SOURCE 
     * @param REQUEST_TOPIC 
     */
    public healthControllerCheck(REQUEST_SOURCE: any, REQUEST_TOPIC: any, _options?: Configuration): Observable<HealthControllerCheck200Response> {
        const requestContextPromise = this.requestFactory.healthControllerCheck(REQUEST_SOURCE, REQUEST_TOPIC, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.healthControllerCheck(rsp)));
            }));
    }

    /**
     * @param REQUEST_SOURCE 
     * @param REQUEST_TOPIC 
     */
    public healthControllerMetrics(REQUEST_SOURCE: any, REQUEST_TOPIC: any, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.healthControllerMetrics(REQUEST_SOURCE, REQUEST_TOPIC, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.healthControllerMetrics(rsp)));
            }));
    }

}

import { ICDApiRequestFactory, ICDApiResponseProcessor} from "../apis/ICDApi";
export class ObservableICDApi {
    private requestFactory: ICDApiRequestFactory;
    private responseProcessor: ICDApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ICDApiRequestFactory,
        responseProcessor?: ICDApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ICDApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ICDApiResponseProcessor();
    }

    /**
     * @param id 
     * @param REQUEST_SOURCE 
     * @param REQUEST_TOPIC 
     */
    public icdControllerGetById(id: string, REQUEST_SOURCE: any, REQUEST_TOPIC: any, _options?: Configuration): Observable<IcdControllerGetById200Response> {
        const requestContextPromise = this.requestFactory.icdControllerGetById(id, REQUEST_SOURCE, REQUEST_TOPIC, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.icdControllerGetById(rsp)));
            }));
    }

    /**
     * @param text 
     * @param REQUEST_SOURCE 
     * @param REQUEST_TOPIC 
     */
    public icdControllerSearch(text: string, REQUEST_SOURCE: any, REQUEST_TOPIC: any, _options?: Configuration): Observable<IcdControllerSearch200Response> {
        const requestContextPromise = this.requestFactory.icdControllerSearch(text, REQUEST_SOURCE, REQUEST_TOPIC, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.icdControllerSearch(rsp)));
            }));
    }

}

import { InternalCPTApiRequestFactory, InternalCPTApiResponseProcessor} from "../apis/InternalCPTApi";
export class ObservableInternalCPTApi {
    private requestFactory: InternalCPTApiRequestFactory;
    private responseProcessor: InternalCPTApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: InternalCPTApiRequestFactory,
        responseProcessor?: InternalCPTApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new InternalCPTApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new InternalCPTApiResponseProcessor();
    }

    /**
     * @param url 
     * @param REQUEST_SOURCE 
     * @param REQUEST_TOPIC 
     */
    public internalCptControllerImport(url: string, REQUEST_SOURCE: any, REQUEST_TOPIC: any, _options?: Configuration): Observable<InternalCptControllerImport200Response> {
        const requestContextPromise = this.requestFactory.internalCptControllerImport(url, REQUEST_SOURCE, REQUEST_TOPIC, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.internalCptControllerImport(rsp)));
            }));
    }

}

import { InternalICDApiRequestFactory, InternalICDApiResponseProcessor} from "../apis/InternalICDApi";
export class ObservableInternalICDApi {
    private requestFactory: InternalICDApiRequestFactory;
    private responseProcessor: InternalICDApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: InternalICDApiRequestFactory,
        responseProcessor?: InternalICDApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new InternalICDApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new InternalICDApiResponseProcessor();
    }

    /**
     * @param url 
     * @param REQUEST_SOURCE 
     * @param REQUEST_TOPIC 
     */
    public internalIcdControllerImport(url: string, REQUEST_SOURCE: any, REQUEST_TOPIC: any, _options?: Configuration): Observable<InternalCptControllerImport200Response> {
        const requestContextPromise = this.requestFactory.internalIcdControllerImport(url, REQUEST_SOURCE, REQUEST_TOPIC, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.internalIcdControllerImport(rsp)));
            }));
    }

}

import { InternalLOINCApiRequestFactory, InternalLOINCApiResponseProcessor} from "../apis/InternalLOINCApi";
export class ObservableInternalLOINCApi {
    private requestFactory: InternalLOINCApiRequestFactory;
    private responseProcessor: InternalLOINCApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: InternalLOINCApiRequestFactory,
        responseProcessor?: InternalLOINCApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new InternalLOINCApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new InternalLOINCApiResponseProcessor();
    }

    /**
     * @param url 
     * @param REQUEST_SOURCE 
     * @param REQUEST_TOPIC 
     */
    public internalLoincControllerImport(url: string, REQUEST_SOURCE: any, REQUEST_TOPIC: any, _options?: Configuration): Observable<InternalCptControllerImport200Response> {
        const requestContextPromise = this.requestFactory.internalLoincControllerImport(url, REQUEST_SOURCE, REQUEST_TOPIC, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.internalLoincControllerImport(rsp)));
            }));
    }

}

import { InternalNDCApiRequestFactory, InternalNDCApiResponseProcessor} from "../apis/InternalNDCApi";
export class ObservableInternalNDCApi {
    private requestFactory: InternalNDCApiRequestFactory;
    private responseProcessor: InternalNDCApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: InternalNDCApiRequestFactory,
        responseProcessor?: InternalNDCApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new InternalNDCApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new InternalNDCApiResponseProcessor();
    }

    /**
     * @param url 
     * @param REQUEST_SOURCE 
     * @param REQUEST_TOPIC 
     */
    public internalNdcControllerImport(url: string, REQUEST_SOURCE: any, REQUEST_TOPIC: any, _options?: Configuration): Observable<InternalCptControllerImport200Response> {
        const requestContextPromise = this.requestFactory.internalNdcControllerImport(url, REQUEST_SOURCE, REQUEST_TOPIC, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.internalNdcControllerImport(rsp)));
            }));
    }

}

import { InternalNPIApiRequestFactory, InternalNPIApiResponseProcessor} from "../apis/InternalNPIApi";
export class ObservableInternalNPIApi {
    private requestFactory: InternalNPIApiRequestFactory;
    private responseProcessor: InternalNPIApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: InternalNPIApiRequestFactory,
        responseProcessor?: InternalNPIApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new InternalNPIApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new InternalNPIApiResponseProcessor();
    }

    /**
     * @param url 
     * @param REQUEST_SOURCE 
     * @param REQUEST_TOPIC 
     */
    public internalNpiControllerImport(url: string, REQUEST_SOURCE: any, REQUEST_TOPIC: any, _options?: Configuration): Observable<InternalCptControllerImport200Response> {
        const requestContextPromise = this.requestFactory.internalNpiControllerImport(url, REQUEST_SOURCE, REQUEST_TOPIC, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.internalNpiControllerImport(rsp)));
            }));
    }

    /**
     * @param url 
     * @param REQUEST_SOURCE 
     * @param REQUEST_TOPIC 
     */
    public internalNpiControllerImportUpdate(url: string, REQUEST_SOURCE: any, REQUEST_TOPIC: any, _options?: Configuration): Observable<InternalCptControllerImport200Response> {
        const requestContextPromise = this.requestFactory.internalNpiControllerImportUpdate(url, REQUEST_SOURCE, REQUEST_TOPIC, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.internalNpiControllerImportUpdate(rsp)));
            }));
    }

}

import { LOINCApiRequestFactory, LOINCApiResponseProcessor} from "../apis/LOINCApi";
export class ObservableLOINCApi {
    private requestFactory: LOINCApiRequestFactory;
    private responseProcessor: LOINCApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: LOINCApiRequestFactory,
        responseProcessor?: LOINCApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new LOINCApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new LOINCApiResponseProcessor();
    }

    /**
     * @param id 
     * @param REQUEST_SOURCE 
     * @param REQUEST_TOPIC 
     */
    public loincControllerGetById(id: string, REQUEST_SOURCE: any, REQUEST_TOPIC: any, _options?: Configuration): Observable<LoincControllerGetById200Response> {
        const requestContextPromise = this.requestFactory.loincControllerGetById(id, REQUEST_SOURCE, REQUEST_TOPIC, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.loincControllerGetById(rsp)));
            }));
    }

    /**
     * @param text 
     * @param REQUEST_SOURCE 
     * @param REQUEST_TOPIC 
     * @param limit 
     * @param page 
     */
    public loincControllerSearch(text: string, REQUEST_SOURCE: any, REQUEST_TOPIC: any, limit?: string, page?: string, _options?: Configuration): Observable<LoincControllerSearch200Response> {
        const requestContextPromise = this.requestFactory.loincControllerSearch(text, REQUEST_SOURCE, REQUEST_TOPIC, limit, page, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.loincControllerSearch(rsp)));
            }));
    }

}

import { NDCApiRequestFactory, NDCApiResponseProcessor} from "../apis/NDCApi";
export class ObservableNDCApi {
    private requestFactory: NDCApiRequestFactory;
    private responseProcessor: NDCApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: NDCApiRequestFactory,
        responseProcessor?: NDCApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new NDCApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new NDCApiResponseProcessor();
    }

    /**
     * @param id 
     * @param REQUEST_SOURCE 
     * @param REQUEST_TOPIC 
     */
    public ndcControllerGetById(id: string, REQUEST_SOURCE: any, REQUEST_TOPIC: any, _options?: Configuration): Observable<NdcControllerGetById200Response> {
        const requestContextPromise = this.requestFactory.ndcControllerGetById(id, REQUEST_SOURCE, REQUEST_TOPIC, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.ndcControllerGetById(rsp)));
            }));
    }

    /**
     * @param text 
     * @param REQUEST_SOURCE 
     * @param REQUEST_TOPIC 
     */
    public ndcControllerSearch(text: string, REQUEST_SOURCE: any, REQUEST_TOPIC: any, _options?: Configuration): Observable<NdcControllerSearch200Response> {
        const requestContextPromise = this.requestFactory.ndcControllerSearch(text, REQUEST_SOURCE, REQUEST_TOPIC, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.ndcControllerSearch(rsp)));
            }));
    }

}

import { NPIApiRequestFactory, NPIApiResponseProcessor} from "../apis/NPIApi";
export class ObservableNPIApi {
    private requestFactory: NPIApiRequestFactory;
    private responseProcessor: NPIApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: NPIApiRequestFactory,
        responseProcessor?: NPIApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new NPIApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new NPIApiResponseProcessor();
    }

    /**
     * @param id 
     * @param REQUEST_SOURCE 
     * @param REQUEST_TOPIC 
     */
    public npiControllerGetIndividualById(id: string, REQUEST_SOURCE: any, REQUEST_TOPIC: any, _options?: Configuration): Observable<NpiControllerGetIndividualById200Response> {
        const requestContextPromise = this.requestFactory.npiControllerGetIndividualById(id, REQUEST_SOURCE, REQUEST_TOPIC, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.npiControllerGetIndividualById(rsp)));
            }));
    }

    /**
     * @param id 
     * @param REQUEST_SOURCE 
     * @param REQUEST_TOPIC 
     */
    public npiControllerGetLaboratoryById(id: string, REQUEST_SOURCE: any, REQUEST_TOPIC: any, _options?: Configuration): Observable<NpiControllerGetLaboratoryById200Response> {
        const requestContextPromise = this.requestFactory.npiControllerGetLaboratoryById(id, REQUEST_SOURCE, REQUEST_TOPIC, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.npiControllerGetLaboratoryById(rsp)));
            }));
    }

    /**
     * @param id 
     * @param REQUEST_SOURCE 
     * @param REQUEST_TOPIC 
     */
    public npiControllerGetPracticeById(id: string, REQUEST_SOURCE: any, REQUEST_TOPIC: any, _options?: Configuration): Observable<NpiControllerGetLaboratoryById200Response> {
        const requestContextPromise = this.requestFactory.npiControllerGetPracticeById(id, REQUEST_SOURCE, REQUEST_TOPIC, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.npiControllerGetPracticeById(rsp)));
            }));
    }

    /**
     * @param text 
     * @param REQUEST_SOURCE 
     * @param REQUEST_TOPIC 
     * @param limit 
     * @param page 
     */
    public npiControllerSearchIndividual(text: string, REQUEST_SOURCE: any, REQUEST_TOPIC: any, limit?: string, page?: string, _options?: Configuration): Observable<NpiControllerSearchIndividual200Response> {
        const requestContextPromise = this.requestFactory.npiControllerSearchIndividual(text, REQUEST_SOURCE, REQUEST_TOPIC, limit, page, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.npiControllerSearchIndividual(rsp)));
            }));
    }

    /**
     * @param text 
     * @param REQUEST_SOURCE 
     * @param REQUEST_TOPIC 
     * @param limit 
     * @param page 
     */
    public npiControllerSearchLaboratory(text: string, REQUEST_SOURCE: any, REQUEST_TOPIC: any, limit?: string, page?: string, _options?: Configuration): Observable<NpiControllerSearchLaboratory200Response> {
        const requestContextPromise = this.requestFactory.npiControllerSearchLaboratory(text, REQUEST_SOURCE, REQUEST_TOPIC, limit, page, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.npiControllerSearchLaboratory(rsp)));
            }));
    }

    /**
     * @param text 
     * @param REQUEST_SOURCE 
     * @param REQUEST_TOPIC 
     * @param limit 
     * @param page 
     */
    public npiControllerSearchPractice(text: string, REQUEST_SOURCE: any, REQUEST_TOPIC: any, limit?: string, page?: string, _options?: Configuration): Observable<NpiControllerSearchLaboratory200Response> {
        const requestContextPromise = this.requestFactory.npiControllerSearchPractice(text, REQUEST_SOURCE, REQUEST_TOPIC, limit, page, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.npiControllerSearchPractice(rsp)));
            }));
    }

}
