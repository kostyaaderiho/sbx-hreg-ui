import axios, { AxiosRequestConfig } from 'axios';

import { RECOGNITION_EXCEL_API_ENDPOINT } from '~/constants/app';

export class RecognitionExcel {
    static get(params: AxiosRequestConfig['params']) {
        return axios.get(RECOGNITION_EXCEL_API_ENDPOINT, {
            params,
            responseType: 'arraybuffer',
            headers: {
                Accept: 'application/vnd.ms-excel'
            }
        });
    }
}
