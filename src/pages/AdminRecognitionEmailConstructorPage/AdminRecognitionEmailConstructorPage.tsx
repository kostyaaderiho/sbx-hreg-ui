import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux';

import { SnackBar } from '~/components/SnackBar';
import { RecognitionTemplate } from '~/components/EmailTemplates/recognitions/v1/RecognitionTemplate';
import { RECOGNITION_ROUTES } from '~/constants';
import { selectElContent } from '~/utils';
import { PageContent } from '~/components/PageContent';
import * as S from '~/components/EmailConstructor';
import { RouteParams } from '~/types';
import { selectApprovedRecognitions } from '~/redux/recognitions';

import { recognitionsImages } from './AdminRecognitionEmailConstructorPage.constant';

export const AdminRecognitionEmailConstructorPage = () => {
    const recognitions = useSelector(selectApprovedRecognitions);
    const { country }: RouteParams = useParams();

    const [selectedEmailImage, setSelectedEmailImage] = useState<string | null>(
        null
    );
    const [isSnackbarOpened, setIsSnackbarOpened] = useState(false);
    const [isPreviewEnabled, setIsPreviewEnabled] = useState(false);
    const [emailImages] = useState(recognitionsImages.v1);

    const copyToClipboard = () => {
        selectElContent('#emailPreview');
        document.execCommand('copy');
        setIsSnackbarOpened(true);
    };

    const onEmailImageSelect = (image: number) => {
        setSelectedEmailImage(emailImages[image].imageSrc);
    };

    return (
        <>
            <PageContent>
                <>
                    {isPreviewEnabled ? (
                        <>
                            <S.EmailPreview id='emailPreview'>
                                <RecognitionTemplate
                                    emailImage={selectedEmailImage as string}
                                    recognitions={recognitions}
                                />
                            </S.EmailPreview>

                            <S.ConfigurationControls>
                                <Link
                                    to={`/${country}${RECOGNITION_ROUTES.recognitions}`}
                                >
                                    <Button variant='contained'>
                                        Back to recognitions
                                    </Button>
                                </Link>
                                <S.EditButton
                                    onClick={() => setIsPreviewEnabled(false)}
                                    variant='contained'
                                    className='emailConfigurationControls-editButton'
                                >
                                    Edit
                                </S.EditButton>
                                <Button
                                    onClick={copyToClipboard}
                                    variant='contained'
                                    color='primary'
                                >
                                    Copy to clipboard
                                </Button>
                            </S.ConfigurationControls>
                        </>
                    ) : (
                        <S.Configuration>
                            <S.ConfigurationOptions>
                                <S.ConfigurationOptionsDescription>
                                    Only approved recognitions will be included
                                    to the email.
                                </S.ConfigurationOptionsDescription>

                                <S.SelectImageGallery
                                    onSelectImage={onEmailImageSelect}
                                    selectImages={emailImages}
                                    defaultSelection={0}
                                />
                            </S.ConfigurationOptions>

                            <S.ConfigurationControls>
                                <Link
                                    to={`/${country}${RECOGNITION_ROUTES.recognitions}`}
                                >
                                    <Button variant='contained'>
                                        Back to recognitions
                                    </Button>
                                </Link>
                                <Button
                                    onClick={() => setIsPreviewEnabled(true)}
                                    disabled={!recognitions.length}
                                    variant='contained'
                                    color='secondary'
                                >
                                    Preview
                                </Button>
                            </S.ConfigurationControls>
                        </S.Configuration>
                    )}
                </>
            </PageContent>
            <SnackBar
                message={
                    'The email information has been copied into clipboard.'
                }
                isSnackbarOpened={isSnackbarOpened}
                onClose={() => setIsSnackbarOpened(false)}
            />
        </>
    );
};
