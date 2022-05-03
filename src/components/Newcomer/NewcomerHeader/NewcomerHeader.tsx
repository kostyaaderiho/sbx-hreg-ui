import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';

import {
    Header,
    HeaderNav,
    HeaderControl,
    HeaderNavItemLink
} from '~/components/Header';
import { NEWCOMER_ROUTES } from '~/constants';
import translations from '~/i18n/translations.json';
import { selectApprovedNewcomers } from '~/redux/newcomers';
import { useLogin } from '~/hooks/useLogin';
import { Newcomer } from '~/types/newcomer';
import { RouteParams } from '~/types/routeParams';

export type NewcomerHeaderProps = {
    isGenerateButtonEnabled: boolean;
};

export const NewcomerHeader: React.FC<NewcomerHeaderProps> = ({
    isGenerateButtonEnabled
}) => {
    const { logout } = useLogin();
    const { country }: RouteParams = useParams();
    const newcomers: Newcomer[] = useSelector(selectApprovedNewcomers);

    return (
        <Header>
            <HeaderNav />
            <div>
                <HeaderControl>
                    <HeaderNavItemLink
                        activeClassName='navItemLink--active'
                        to={`/${country}${NEWCOMER_ROUTES.newcomerArchive}`}
                        exact
                    >
                        {translations.header_archive_button}
                    </HeaderNavItemLink>
                </HeaderControl>
                {isGenerateButtonEnabled && (
                    <HeaderControl>
                        {newcomers.length ? (
                            <Link
                                to={`/${country}${NEWCOMER_ROUTES.emailConstructor}`}
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
