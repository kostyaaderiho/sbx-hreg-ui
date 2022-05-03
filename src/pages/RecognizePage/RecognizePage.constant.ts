import { ENTITY_STATUS } from '~/constants/entity';

export const DEFAULT_RECOGNITION = {
    status: ENTITY_STATUS.pending,
    recognitionGroupId: null,
    createdDate: null,
    personalMessage: '',
    nominator: '',
    fullName: '',
    position: '',
    category: 0,
    message: '',
    title: '',
    photo: ''
};

export const INPUT_ACTIONS: Record<
    Lowercase<InputActionType>,
    InputActionType
> = {
    update: 'UPDATE',
    refresh: 'REFRESH'
};

export const INPUTS_DEFAULT_STATE = {
    nominator: '',
    category: 0,
    message: '',
    title: ''
};

type InputState = {
    nominator: string;
    category: number;
    message: string;
    title: string;
};

type InputActionType = 'UPDATE' | 'REFRESH';

export type InputAction = {
    type: InputActionType;
    payload?: {
        name: string;
        value: string;
    };
};

export const inputReducer = (state: InputState, action: InputAction) => {
    switch (action.type) {
        case INPUT_ACTIONS.update:
            return {
                ...state,
                [action.payload!.name]: action.payload?.value
            };
        case INPUT_ACTIONS.refresh:
            return INPUTS_DEFAULT_STATE;
        default:
            return state;
    }
};
