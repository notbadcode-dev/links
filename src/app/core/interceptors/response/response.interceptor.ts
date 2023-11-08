/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HTTP_RESPONSE_STATUS } from '@constants/http.constant';
import { HttpResponseBody } from '@models/http-response.model';
import { EnvironmentService } from '@services/environment/environment.service';
import { SessionService } from '@services/session/session.service';
import { map, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
    constructor(private _environmentService: EnvironmentService, private _sessionService: SessionService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        if (!this.shouldInterceptRequest(request)) {
            return next.handle(request);
        }

        return next.handle(request).pipe(
            tap((event) => {
                if (event instanceof HttpResponse) {
                    if (this.isUnauthorizedResponse(event.status as number)) {
                        this._sessionService.destroySession();
                    }
                }
            }),
            map((event) => {
                if (!this.validateArgumentsForInterceptorHandlerRequest(event)) {
                    return event;
                }

                const TRANSFORM_BODY: any = this.setResponseDataOnRequestBody(event);
                return TRANSFORM_BODY;
            })
        );
    }

    private isUnauthorizedResponse(httpResponseStatusCode: number): boolean {
        return [HTTP_RESPONSE_STATUS.UNAUTHORIZED].includes(httpResponseStatusCode);
    }

    private shouldInterceptRequest(request: HttpRequest<any>): boolean {
        return request.url.includes(this._environmentService.getAuthApi) || request.url.includes(this._environmentService.getLinkApi);
    }

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

        const RESPONSE_HEADER = event?.headers ?? null;

        if (!RESPONSE_HEADER) {
            return false;
        }

        const INCLUDES_APPLICATION_JSON = RESPONSE_HEADER.get('content-type')?.toString()?.includes('application/json') ?? false;

        if (!INCLUDES_APPLICATION_JSON) {
            return false;
        }

        const BODY: HttpResponseBody = event.body;
        if (!BODY) {
            return false;
        }

        const DATA = BODY.data;
        if (!DATA) {
            return false;
        }

        return true;
    }

    private setResponseDataOnRequestBody(event: any): HttpRequest<any> {
        const PARSED_BODY: any = JSON.parse(JSON.stringify(event.body.data));
        const TRANSFORM_REQUEST: HttpRequest<any> = event.clone({ body: PARSED_BODY });

        return TRANSFORM_REQUEST;
    }
}
