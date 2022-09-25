import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.dev';
import { HttpResponseBody } from '@models/http-response.model';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        if (!request.url.includes(environment.notBadCodeApi)) {
            return next.handle(request);
        }

        return next.handle(request).pipe(
            map(event => {
                if (!this.validateArgumentsForInterceptorHandlerRequest(event)) {
                    return event;
                }

                const transformbBody: any = this.setResponseDataOnRequestBody(event);
                return transformbBody;
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
