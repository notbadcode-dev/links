import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ENVIRONMENT } from '@environment/environment';
import { HttpResponseBody } from '@models/http-response.model';
import { map, Observable } from 'rxjs';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(_request: HttpRequest<any>, _next: HttpHandler): Observable<HttpEvent<unknown>> {
        if (!_request.url.includes(ENVIRONMENT.authApi) && !_request.url.includes(ENVIRONMENT.linkApi)) {
            return _next.handle(_request);
        }

        return _next.handle(_request).pipe(
            map((event) => {
                if (!this.validateArgumentsForInterceptorHandlerRequest(event)) {
                    return event;
                }

                const TRANSFORM_BODY: any = this.setResponseDataOnRequestBody(event);
                return TRANSFORM_BODY;
            })
        );
    }

    /**
     * @description Validate arguments for interceptor handler request
     * @param  {HttpEvent<any>} event
     * @returns boolean
     */
    private validateArgumentsForInterceptorHandlerRequest(event: HttpEvent<any>): boolean {
        if (!event) {
            return false;
        }

        if (!(event instanceof HttpResponse)) {
            return false;
        }

        if (!event.headers) {
            return false;
        }

        const RESPONSE_HEADER: HttpHeaders = event?.headers ?? null;

        if (!RESPONSE_HEADER) {
            return false;
        }

        const INCLUDES_APPLICATION_JSON: boolean = RESPONSE_HEADER.get('content-type')?.toString()?.includes('application/json') ?? false;

        if (!INCLUDES_APPLICATION_JSON) {
            return false;
        }

        const BODY: HttpResponseBody = event.body;
        if (!BODY) {
            return false;
        }

        const DATA: any = BODY.data;
        if (!DATA) {
            return false;
        }

        return true;
    }

    /**
     * @description Set data property from body on body
     * @param  {any} event
     * @returns HttpRequest
     */
    private setResponseDataOnRequestBody(event: any): HttpRequest<any> {
        const PARSED_BODY: any = JSON.parse(JSON.stringify(event.body.data));
        const TRANSFORM_REQUEST: HttpRequest<any> = event.clone({ body: PARSED_BODY });

        return TRANSFORM_REQUEST;
    }
}
