import React from 'react';
import { useParams } from 'react-router-dom';

import { NEWCOMER_ROUTES, RECOGNITION_ROUTES } from '~/constants';
import { RouteParams } from '~/types/routeParams';

import { HeaderNavItemLink } from '../HeaderNavItemLink';

import * as S from './HeaderNav.style';

export const HeaderNav = () => {
    const { country }: RouteParams = useParams();
    const uxd = country.includes('-uxd');

    return (
        <S.Nav>
            <S.NavItem>
                <HeaderNavItemLink
                    activeClassName='navItemLink--active'
                    to={`/${country}${NEWCOMER_ROUTES.newcomers}`}
                    exact
                >
                    Newcomers
                </HeaderNavItemLink>
            </S.NavItem>
            {!uxd && (
                <S.NavItem>
                    <HeaderNavItemLink
                        activeClassName='navItemLink--active'
                        to={`/${country}${RECOGNITION_ROUTES.recognitions}`}
                        exact
                    >
                        Recognitions
                    </HeaderNavItemLink>
                </S.NavItem>
            )}
        </S.Nav>
    );
};
