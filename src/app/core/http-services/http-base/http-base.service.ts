import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class HttpBaseService {
    constructor(private _http: HttpClient) {}

    public httpGet<T>(url: string): Observable<T> {
        return this.mapResponse(this._http.get<T>(url));
    }

    public httpPost<T, D>(url: string, data: D | null = null): Observable<T> {
        return this.mapResponse(this._http.post<T>(url, data));
    }

    public httpPut<T, D>(url: string, data: D | null = null): Observable<T> {
        return this.mapResponse(this._http.put<T>(url, data));
    }

    public httpPatch<T, D>(url: string, data: D | null = null): Observable<T> {
        return this.mapResponse(this._http.patch<T>(url, data));
    }

    public httpDelete<T>(url: string): Observable<T> {
        return this.mapResponse(this._http.delete<T>(url));
    }

    private mapResponse<T>(source: Observable<T>): Observable<T> {
        return source.pipe(
            map((result: T) => {
                return result;
            })
        );
    }
}
