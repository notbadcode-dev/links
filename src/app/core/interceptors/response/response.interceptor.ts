import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { HttpResponseBody } from '@models/http-response.model';
import { map, Observable } from 'rxjs';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(_request: HttpRequest<any>, _next: HttpHandler): Observable<HttpEvent<unknown>> {
        if (!_request.url.includes(environment.authApi) && !_request.url.includes(environment.linkApi)) {
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

        const responseHeaders: HttpHeaders = event?.headers ?? null;

        if (!responseHeaders) {
            return false;
        }

        const includesApplicationJson: boolean = responseHeaders.get('content-type')?.toString()?.includes('application/json') ?? false;

        if (!includesApplicationJson) {
            return false;
        }

        const body: HttpResponseBody = event.body;
        if (!body) {
            return false;
        }

        const data: any = body.data;
        if (!data) {
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
        const parsedBody: any = JSON.parse(JSON.stringify(event.body.data));
        const transformRequest: HttpRequest<any> = event.clone({ body: parsedBody });

        return transformRequest;
    }
}
