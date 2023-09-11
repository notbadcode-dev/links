import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeadersInterceptor } from '@interceptors/headers/headers.interceptor';
import { ResponseInterceptor } from '@interceptors/response/response.interceptor';

export const INTERCEPTOR_PROVIDER_LIST = [
    { provide: HTTP_INTERCEPTORS, useClass: HeadersInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true },
];
