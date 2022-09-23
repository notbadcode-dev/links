import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(_request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const request: HttpRequest<unknown> = _request.clone({
            headers: _request.headers.set('content-type', 'application/json'),
        });
        return next.handle(request);
    }
}
