import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeadersInterceptor } from './headers/headers.interceptor';
import { ResponseInterceptor } from './response/response.interceptor';

export const interceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: HeadersInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true },
];
