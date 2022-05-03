import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux';
import FileSaver from 'file-saver';

import {
    Header,
    HeaderControl,
    HeaderNav,
    HeaderNavItemLink
} from '~/components/Header';
import { selectApprovedRecognitions } from '~/redux/recognitions';
import { ENTITY_STATUS } from '~/constants/entity';
import { RECOGNITION_ROUTES } from '~/constants/router';
import translations from '~/i18n/translations.json';
import { RecognitionExcel } from '~/httpServiceModels/recognitionExcel.model';
import { Recognition } from '~/types/recognition';
import { RouteParams } from '~/types/routeParams';
import { useLogin } from '~/hooks/useLogin';

export type RecognitionHeaderProps = {
    isGenerateButtonEnabled?: boolean;
    isExcelButtonEnabled?: boolean;
};

export const RecognitionHeader: React.FC<RecognitionHeaderProps> = ({
    isGenerateButtonEnabled = false,
    isExcelButtonEnabled = false
}) => {
    const { logout } = useLogin();
    const { country }: RouteParams = useParams();
    const recognitions: Recognition[] = useSelector(selectApprovedRecognitions);

    const downloadExcelFile = async () => {
        const res = await RecognitionExcel.get({
            status: ENTITY_STATUS.archived
        });

        const blob = new Blob([res.data], {
            type: 'application/vnd.ms-excel'
        });
        FileSaver.saveAs(blob, 'Recognitions.xlsx');
    };

    return (
        <Header>
            <HeaderNav />
            <div>
                <HeaderControl>
                    <HeaderNavItemLink
                        activeClassName='navItemLink--active'
                        to={`/${country}/recognitions/archive`}
                        exact
                    >
                        {translations.header_archive_button}
                    </HeaderNavItemLink>
                </HeaderControl>

                {isExcelButtonEnabled && (
                    <HeaderControl>
                        <Button
                            variant='contained'
                            color='primary'
                            onClick={downloadExcelFile}
                        >
                            {translations.header_report_button}
                        </Button>
                    </HeaderControl>
                )}
                {isGenerateButtonEnabled && (
                    <HeaderControl>
                        {recognitions.length ? (
                            <Link
                                to={`/${country}${RECOGNITION_ROUTES.emailConstructor}`}
                            >
                                <Button variant='contained' color='primary'>
                                    {translations.header_generate_email_button}
                                </Button>
                            </Link>
                        ) : (
                            <Button
                                disabled={true}
                                variant='contained'
                                color='primary'
                            >
                                {translations.header_generate_email_button}
                            </Button>
                        )}
                    </HeaderControl>
                )}
                <HeaderControl>
                    <Button
                        variant='contained'
                        color='primary'
                        onClick={logout}
                    >
                        {translations.header_logout_button}
                    </Button>
                </HeaderControl>
            </div>
        </Header>
    );
};
