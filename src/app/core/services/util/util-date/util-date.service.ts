import { Injectable } from '@angular/core';
import * as dayjs from 'dayjs';

@Injectable({
    providedIn: 'root',
})
export class UtilDateService {
    constructor() {}

    /**
     * @description Format date to string
     * @param  {string} format
     * @param  {Date} date? When not exist use current date
     */
    public static formatDate(format: string, date?: Date): string {
        if (!format || typeof format !== 'string' || format.trim().length === 0) {
            return '';
        }

        return dayjs(date ?? new Date()).format(format);
    }
}
