import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

import { COMMON_ROUTES } from '~/constants/router';
import { useLogin } from '~/hooks/useLogin';

export type PrivateRouteProps = RouteProps;

export const PrivateRoute: React.FC<PrivateRouteProps> = ({
    path,
    component,
    ...rest
}) => {
    const { isAuthorized } = useLogin();

    if (!isAuthorized()) {
        return <Redirect to={COMMON_ROUTES.login} />;
    }

    return (
        <Route path={path} {...rest}>
            {component}
        </Route>
    );
};
