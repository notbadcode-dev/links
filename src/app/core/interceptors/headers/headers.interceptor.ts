import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from '@services/local-storage/local-storage.service';
import { HTTP_HEADERS } from '@constants/http-header.constant';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {
    constructor(private _localStorageService: LocalStorageService) {}

    intercept(_request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        if (!_request.url.includes(environment.notBadCodeApi)) {
            return next.handle(_request);
        }

        let request: HttpRequest<unknown> = this.addHeaderToRequest(
            _request,
            HTTP_HEADERS.CONTENT_TYPE.KEY,
            HTTP_HEADERS.CONTENT_TYPE.VALUES.APPLICATION_JSON
        );

        const token: string = this._localStorageService?.getLocalStorageTokenItem ?? null;

        if (!token || !token.length) {
            return next.handle(request);
        }

        request = this.addHeaderToRequest(request, HTTP_HEADERS.AUTHOTIZATION.KEY, token);

        return next.handle(request);
    }

    /**
     * @description Add header for reasign http request headers
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
