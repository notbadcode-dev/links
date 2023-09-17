/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvironmentService } from '@app/core/services/environment/environment.service';
import { LocalStorageService } from '@app/core/services/local-storage/local-storage.service';
import { HTTP_HEADERS } from '@constants/http-header.constant';
import { Observable } from 'rxjs';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {
    constructor(private _localStorageService: LocalStorageService, private _environmentService: EnvironmentService) {}

    intercept(_request: HttpRequest<unknown>, _next: HttpHandler): Observable<HttpEvent<unknown>> {
        if (!_request.url.includes(this._environmentService.getAuthApi) && !_request.url.includes(this._environmentService.getLinkApi)) {
            return _next.handle(_request);
        }

        const TOKEN: string = this._localStorageService?.getLocalStorageTokenItem ?? '';
        const LANGUAGE: string = this._localStorageService?.getLocalStorageLanguageItem ?? '';

        _request = _request.clone({
            headers: new HttpHeaders({
                [HTTP_HEADERS.CONTENT_TYPE.KEY]: HTTP_HEADERS.CONTENT_TYPE.VALUES.APPLICATION_JSON,
                [HTTP_HEADERS.AUTHORIZATION.KEY]: TOKEN,
                [HTTP_HEADERS.LANGUAGE.KEY]: LANGUAGE,
            }),
        });

        return _next.handle(_request);
    }

    /**
     * @description Add header for resign http request headers
     * @param  {HttpRequest<unknown>} lastRequest
     * @param  {string} headerKey
     * @param  {any} headerValue
     * @returns HttpRequest
     */
    private addHeaderToRequest(lastRequest: HttpRequest<unknown>, headerKey: string, headerValue: any): HttpRequest<unknown> {
        return lastRequest.clone({
            headers: lastRequest.headers.set(headerKey, headerValue),
        });
    }
}
