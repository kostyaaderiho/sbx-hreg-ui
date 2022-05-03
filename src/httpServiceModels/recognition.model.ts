import { CrudModel } from '~/models/crud.model';
import { Newcomer as TRecognition } from '~/types/newcomer';
import { RECOGNITION_API_ENDPOINT } from '~/constants/app';

class Recognition extends CrudModel<TRecognition> {
    constructor() {
        super(RECOGNITION_API_ENDPOINT);
    }
}

export const recognitionModel = new Recognition();
