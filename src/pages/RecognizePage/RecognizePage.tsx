import React, { useState, ChangeEvent, useReducer } from 'react';
import Button from '@material-ui/core/Button';
import { SelectProps } from '@material-ui/core/Select';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';

import { SnackBar } from '~/components/SnackBar';
import { addRecognitionRequest } from '~/redux/recognitions';
import { PageContent } from '~/components/PageContent';
import {
    FormPreview,
    FormWrapper,
    FormControlsWrapper
} from '~/components/Form';
import { RouteParams } from '~/types/routeParams';
import { Recognition } from '~/types/recognition';

import { RecognizeForm } from './RecognizeForm';
import {
    INPUTS_DEFAULT_STATE,
    DEFAULT_RECOGNITION,
    inputReducer,
    INPUT_ACTIONS,
    InputAction
} from './RecognizePage.constant';

export const RecognizePage = () => {
    const { country }: RouteParams = useParams();
    const dispatch = useDispatch();

    const [isSnackbarOpened, setIsSnackbarOpened] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);
    const [recognitions, setRecognitions] = useState<Recognition[]>([
        {
            ...DEFAULT_RECOGNITION,
            country,
            id: uuidv4()
        }
    ]);
    const [inputsState, inputsDispatch] = useReducer(
        inputReducer,
        INPUTS_DEFAULT_STATE
    );

    const validate = (items: Recognition[]) => {
        return !items.find(
            (recognition) =>
                !recognition.nominator ||
                !recognition.fullName ||
                !recognition.message ||
                !recognition.title
        );
    };

    const onSelect: SelectProps['onChange'] = (event) => {
        const { value, name } = event.target;
        const payload = { value, name } as InputAction['payload'];

        inputsDispatch({
            type: INPUT_ACTIONS.update,
            payload
        });
        setRecognitions(
            recognitions.map((recognition) => ({
                ...recognition,
                category: +(value as string)
            }))
        );
    };

    const onNomineeInput = (
        ev: ChangeEvent<HTMLInputElement>,
        id: Recognition['id']
    ) => {
        const { name, value } = ev.target;
        const updatedNominees = recognitions.map((recognition) => ({
            ...recognition,
            [name]:
                recognition.id === id
                    ? value
                    : recognition[name as keyof Recognition]
        }));

        setIsFormValid(validate(updatedNominees));
        setRecognitions(updatedNominees);
    };

    const onInput = (ev: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = ev.target;
        const updatedNominees = recognitions.map((recognition) => ({
            ...recognition,
            [name]: value
        }));

        inputsDispatch({
            type: INPUT_ACTIONS.update,
            payload: {
                name,
                value
            }
        });
        setIsFormValid(validate(updatedNominees));
        setRecognitions(updatedNominees);
    };

    const onAdd = () => {
        const { nominator, category, message } = inputsState;
        const updatedNominees = [
            ...recognitions,
            {
                ...DEFAULT_RECOGNITION,
                country,
                id: uuidv4(),
                nominator,
                category,
                message
            }
        ];

        setIsFormValid(validate(updatedNominees));
        setRecognitions(updatedNominees);
    };

    const onSubmit = () => {
        dispatch(addRecognitionRequest(recognitions));
        inputsDispatch({
            type: INPUT_ACTIONS.refresh
        });
        setRecognitions([
            {
                ...DEFAULT_RECOGNITION,
                country,
                id: uuidv4()
            }
        ]);
        setIsSnackbarOpened(true);
    };

    return (
        <>
            <PageContent>
                <FormPreview>
                    <FormWrapper>
                        <RecognizeForm
                            onNomineeInput={onNomineeInput}
                            recognitions={recognitions}
                            onInput={onInput}
                            onSelect={onSelect}
                            onAdd={onAdd}
                            {...inputsState}
                        />
                    </FormWrapper>
                    <FormControlsWrapper>
                        <Button
                            onClick={onSubmit}
                            disabled={!isFormValid}
                            variant='contained'
                            color='primary'
                        >
                            Recognize
                        </Button>
                    </FormControlsWrapper>
                </FormPreview>
            </PageContent>
            <SnackBar
                message={'Recognition has been sent.'}
                onClose={() => setIsSnackbarOpened(false)}
                isSnackbarOpened={isSnackbarOpened}
            />
        </>
    );
};
