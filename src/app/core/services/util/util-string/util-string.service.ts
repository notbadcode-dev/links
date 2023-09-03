import { Injectable } from '@angular/core';
import { FORMAT_DATE } from '@app/core/constants/format-dates.constant';
import { UtilDateService } from '@app/core/services/util/util-date/util-date.service';

@Injectable({
    providedIn: 'root',
})
export class UtilStringService {
    /**
     * @description Format string with parameters
     * @param  {string} formattedData
     * @param  {string} parameterDataList
     */
    public formatString(formattedData: string, parameterDataList: (string | number | Date)[]): string {
        return parameterDataList
            .map((value) => this.convertToString(value))
            .reduce((previousValue, value, index) => {
                return (formattedData = formattedData.replace(`{${index}}`, value));
            }, '');
    }

    /**
     * @description Convert any data to string
     * @param  {number|string} data
     * @returns {string}
     */
    public convertToString(data: number | string | Date): string {
        if (typeof data === 'string') {
            return data;
        }

        if (typeof data === 'number') {
            return Number(data).toString();
        }

        if (typeof data?.getMonth === 'function') {
            return UtilDateService.formatDate(FORMAT_DATE.DATE_FOR_DATABASE, data);
        }

        return data + '';
    }
}
