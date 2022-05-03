import React, { useState, ChangeEvent, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux';

import { SnackBar } from '~/components/SnackBar';
import { EmailTemplateV1 } from '~/components/EmailTemplates/newcomers/v1/EmailTemplateV1';
import { EmailTemplateUXDV1 } from '~/components/EmailTemplates/newcomers/v1/EmailTemplateUXDV1';
import { APP_VERSION, NEWCOMER_ROUTES } from '~/constants';
import { getCurrentSeason } from '~/utils/date.utils';
import { selectElContent } from '~/utils/dom.utils';
import { PageContent } from '~/components/PageContent';
import * as S from '~/components/EmailConstructor';
import { RouteParams } from '~/types/routeParams';
import { selectApprovedNewcomers } from '~/redux/newcomers';
import { FiltersContext, useFilters } from '~/hooks/useFilters';

import {
    newcomersImages,
    UXDnewcomersImages,
    INITIAL_FILTERS,
    SORTERS_FUNC
} from './AdminNewcomerEmailConstructorPage.constants';

export const AdminNewcomerEmailConstructorPage = () => {
    const { country }: RouteParams = useParams();
    const uxd = country.includes('-uxd');
    const newcomers = useSelector(selectApprovedNewcomers);

    const { state, actions } = useFilters(
        INITIAL_FILTERS,
        undefined,
        SORTERS_FUNC
    );

    const [selectedEmailImage, setSelectedEmailImage] = useState<string | null>(
        null
    );
    const [isSnackbarOpened, setIsSnackbarOpened] = useState(false);
    const [isPreviewEnabled, setIsPreviewEnabled] = useState(false);
    const [selectedSeasonId, setSelectedSeasonId] = useState<number | null>(
        null
    );
    const [emailMessage, setEmailMessage] = useState('');
    const [titleEmailMessage, setTitleEmailMessage] = useState('');
    const [dateOfEmail, setDateOfEmail] = useState('');
    const [emailImages] = useState(
        uxd ? UXDnewcomersImages[APP_VERSION!] : newcomersImages[APP_VERSION!]
    );

    const onEmailMessageUpdateHandler = (
        event: ChangeEvent<HTMLTextAreaElement>
    ) => {
        setEmailMessage(event.target.value);
    };
    const onTitleEmailMessageUpdateHandler = (
        event: ChangeEvent<HTMLTextAreaElement>
    ) => {
        setTitleEmailMessage(event.target.value);
    };
    const onDateOfEmailUpdateHandler = (
        event: ChangeEvent<HTMLTextAreaElement>
    ) => {
        setDateOfEmail(event.target.value);
    };
    const copyToClipboard = () => {
        selectElContent('#emailPreview');
        document.execCommand('copy');
        setIsSnackbarOpened(true);
    };

    const onEmailImageSelect = (image: number) => {
        setSelectedEmailImage(emailImages[image].imageSrc);
        setSelectedSeasonId(emailImages[image].id);
    };

    const EmailTemplate = uxd ? EmailTemplateUXDV1 : EmailTemplateV1;

    useEffect(() => {
        actions.updateEntities(newcomers);
    }, [actions, newcomers]);

    return (
        <FiltersContext state={state} actions={actions}>
            <PageContent>
                {isPreviewEnabled ? (
                    <>
                        <S.EmailPreview id='emailPreview'>
                            {
                                <EmailTemplate
                                    emailImage={selectedEmailImage}
                                    titleEmailMessage={titleEmailMessage}
                                    emailMessage={emailMessage}
                                    dateOfEmail={dateOfEmail}
                                    seasonId={selectedSeasonId!}
                                    newcomers={state.show}
                                />
                            }
                        </S.EmailPreview>
                        <S.ConfigurationControls>
                            <Link
                                to={`/${country}${NEWCOMER_ROUTES.newcomers}`}
                            >
                                <Button variant='contained'>
                                    Back to newcomers
                                </Button>
                            </Link>
                            <S.EditButton
                                onClick={() => setIsPreviewEnabled(false)}
                                variant='contained'
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
                                Only approved newcomers will be included to the
                                email.
                            </S.ConfigurationOptionsDescription>

                            <S.SelectImageGallery
                                onSelectImage={onEmailImageSelect}
                                defaultSelection={+!uxd && getCurrentSeason()}
                                selectImages={emailImages}
                            />
                            {uxd ? (
                                <>
                                    <S.ConfigurationOptionsTitle>
                                        Message title *
                                    </S.ConfigurationOptionsTitle>

                                    <S.ConfigurationTextArea
                                        placeholder='Please write the title of the welcome message.'
                                        onChange={
                                            onTitleEmailMessageUpdateHandler
                                        }
                                        value={titleEmailMessage}
                                        name='titleEmailMessage'
                                        fullWidth={true}
                                        rows={3}
                                    />

                                    <S.ConfigurationOptionsTitle>
                                        Date
                                    </S.ConfigurationOptionsTitle>

                                    <S.ConfigurationTextArea
                                        placeholder='Please write the date of the email.'
                                        onChange={onDateOfEmailUpdateHandler}
                                        value={dateOfEmail}
                                        name='dateOfEmail'
                                        fullWidth={true}
                                        rows={2}
                                    />
                                </>
                            ) : (
                                <></>
                            )}

                            <S.ConfigurationOptionsTitle>
                                Message *
                            </S.ConfigurationOptionsTitle>

                            <S.ConfigurationTextArea
                                placeholder='Please write welcoming address to introduce new colleagues.'
                                onChange={onEmailMessageUpdateHandler}
                                value={emailMessage}
                                name='emailMessage'
                                fullWidth={true}
                            />
                        </S.ConfigurationOptions>

                        <S.ConfigurationControls>
                            <Link
                                to={`/${country}${NEWCOMER_ROUTES.newcomers}`}
                            >
                                <Button variant='contained'>
                                    Back to newcomers
                                </Button>
                            </Link>
                            <Button
                                onClick={() => setIsPreviewEnabled(true)}
                                disabled={
                                    !emailMessage.length ||
                                    (uxd && !titleEmailMessage.length)
                                }
                                variant='contained'
                                color='secondary'
                            >
                                Preview
                            </Button>
                        </S.ConfigurationControls>
                    </S.Configuration>
                )}
            </PageContent>
            <SnackBar
                message={
                    'The email information has been copied into clipboard.'
                }
                isSnackbarOpened={isSnackbarOpened}
                onClose={() => setIsSnackbarOpened(false)}
            />
        </FiltersContext>
    );
};
