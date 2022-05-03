import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';

import { processFormData } from '~/utils/form.utils';
import { APP_VERSION } from '~/constants/app';

const defaultParams = {
    params: {
        appVersion: APP_VERSION
    }
};

export class CrudModel<T extends { photo: string | Blob; id?: string }> {
    url: string;

    constructor(url: string) {
        this.url = url;
    }

    create(data: T | T[]) {
        return axios.post<T>(this.url, data, defaultParams);
    }

    get(entity: Pick<T, 'id'>) {
        return axios.get<T>(`${this.url}/${entity.id}`, defaultParams);
    }

    getList(params: AxiosRequestConfig): AxiosPromise<T[]> {
        return axios.get<T[]>(this.url, {
            params: {
                ...params,
                ...defaultParams.params
            }
        });
    }

    update(entity: T) {
        return axios.put<T>(
            `${this.url}/${entity.id}`,
            processFormData(entity),
            defaultParams
        );
    }

    updateList(entities: T[]) {
        return axios.put<T[]>(this.url, entities, defaultParams);
    }

    delete(entity: T) {
        return axios.delete(`${this.url}/${entity.id}`, defaultParams);
    }
}
