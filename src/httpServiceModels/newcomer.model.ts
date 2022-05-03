import { CrudModel } from '~/models/crud.model';
import { Newcomer as TNewcomer } from '~/types/newcomer';
import { NEWCOMER_API_ENDPOINT } from '~/constants/app';

class Newcomer extends CrudModel<TNewcomer> {
    constructor() {
        super(NEWCOMER_API_ENDPOINT);
    }
}

export const newcomerModel = new Newcomer();
