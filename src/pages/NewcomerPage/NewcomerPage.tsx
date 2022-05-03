import React, { useState, ChangeEvent } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';

import { NewcomerPreviewV1 } from '~/components/EmailTemplates/newcomers/v1/NewcomerPreviewV1';
import { NewcomerPreviewUXDV1 } from '~/components/EmailTemplates/newcomers/v1/NewcomerPreviewUXDV1';
import { addNewcomerRequest } from '~/redux/newcomers';
import { getCurrentSeason, getImageBlob, circleImage } from '~/utils';
import { NEWCOMER_ROUTES } from '~/constants';
import { PageContent } from '~/components/PageContent';
import { RouteParams } from '~/types/routeParams';
import { Newcomer } from '~/types/newcomer';
import {
    FormPreview,
    FormWrapper,
    FormControlsWrapper
} from '~/components/Form';
import { processFormData } from '~/utils/form.utils';
import { UploadImageProps } from '~/components/UploadImage';

import { DEFAULT_NEWCOMER } from './NewcomerPage.constant';
import { NewcomerForm } from './NewcomerForm';

import { ValidationMessage } from './NewcomerPage.style';

export const NewcomerPage = () => {
    const { country }: RouteParams = useParams();
    const dispatch = useDispatch();

    const [isPreviewModeEnabled, setIsPreviewModeEnabled] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);
    const [imageBase64, setImageBase64] = useState('');
    const [newcomer, setNewcomer] = useState(DEFAULT_NEWCOMER);
    const uxd = country.includes('-uxd');

    const validate = (
        {
            selfIntroduction,
            telescope,
            position,
            fullName,
            skype,
            heroes
        }: Partial<Newcomer>,
        image: string
    ) => {
        return [
            selfIntroduction,
            telescope,
            fullName,
            position,
            image,
            uxd ? heroes : skype
        ].every((val) => val?.length);
    };

    const onSubmitFormHandler = async () => {
        const imageCanvas = document.getElementById(
            'uploadImage-imageCanvas'
        ) as HTMLCanvasElement;

        circleImage(imageCanvas);

        const photo = await getImageBlob(imageCanvas);
        const updatedNewcomer = {
            ...newcomer,
            country,
            isSubmitted: true
        };

        setNewcomer(updatedNewcomer);
        dispatch(
            addNewcomerRequest(
                processFormData({
                    ...updatedNewcomer,
                    photo
                })
            )
        );
    };

    const onFormUpdate = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const updatedNewcomer = {
            ...newcomer,
            [event.target.name]: event.target.value
        };
        setNewcomer(updatedNewcomer);
        setIsFormValid(validate(updatedNewcomer, imageBase64));
    };

    const documentScrollToTop = () => {
        document.documentElement.scrollTop = 0;
    };

    const togglePreviewModeHandler = () => {
        setIsPreviewModeEnabled(!isPreviewModeEnabled);
        documentScrollToTop();
    };

    const onPhotoChange: UploadImageProps['onPhotoChange'] = ({
        imageBase64: img
    }) => {
        setImageBase64(img);
        setIsFormValid(validate(newcomer, img));
    };

    if (newcomer && newcomer.isSubmitted) {
        return <Redirect to={`/${country}${NEWCOMER_ROUTES.newcomerSent}`} />;
    }

    return (
        <PageContent>
            <FormPreview>
                {isPreviewModeEnabled &&
                    (uxd ? (
                        <NewcomerPreviewUXDV1
                            newcomer={newcomer}
                            photo={imageBase64}
                        />
                    ) : (
                        <NewcomerPreviewV1
                            seasonId={getCurrentSeason()}
                            newcomer={newcomer}
                            photo={imageBase64}
                        />
                    ))}
                <FormWrapper hidden={isPreviewModeEnabled}>
                    <ValidationMessage>
                        All fields are required for filling.
                    </ValidationMessage>
                    <NewcomerForm
                        onPhotoChange={onPhotoChange}
                        onFormUpdate={onFormUpdate}
                        uxd={uxd}
                        {...(newcomer as Newcomer)}
                    />
                </FormWrapper>
                <FormControlsWrapper>
                    <Button
                        onClick={togglePreviewModeHandler}
                        disabled={!isFormValid}
                        variant='contained'
                    >
                        {isPreviewModeEnabled ? 'Edit' : 'Preview'}
                    </Button>
                    <Button
                        onClick={onSubmitFormHandler}
                        disabled={!isFormValid}
                        variant='contained'
                        color='primary'
                    >
                        Send
                    </Button>
                </FormControlsWrapper>
            </FormPreview>
        </PageContent>
    );
};
