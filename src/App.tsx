import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import { AdminNewcomerEmailConstructorPage } from '~/pages/AdminNewcomerEmailConstructorPage/AdminNewcomerEmailConstructorPage';
import { AdminNewcomerArchiveListPage } from '~/pages/AdminNewcomerArchiveListPage/AdminNewcomerArchiveListPage';
import { AdminNewcomerListPage } from '~/pages/AdminNewcomerListPage/AdminNewcomerListPage';
import { AdminRecognitionEmailConstructorPage } from '~/pages/AdminRecognitionEmailConstructorPage/AdminRecognitionEmailConstructorPage';
import { AdminRecognitionArchiveListPage } from '~/pages/AdminRecognitionArchiveListPage/AdminRecognitionArchiveListPage';
import { AdminRecognitionListPage } from '~/pages/AdminRecognitionListPage/AdminRecognitionListPage';
import { Login } from '~/pages/Login/Login';
import { NewcomerSentPage } from '~/pages/NewcomerSentPage/NewcomerSentPage';
import { NewcomerPage } from '~/pages/NewcomerPage/NewcomerPage';
import { NotFound } from '~/pages/NotFound/NotFound';
import { RecognizePage } from '~/pages/RecognizePage/RecognizePage';
import { store as appStore } from '~/redux/store';
import { PrivateRoute } from '~/components/PrivateRouter';
import { AppTheme } from '~/assets/style/theme';

import './polyfills';

type AppProps = {
    store: typeof appStore;
};

export const App: React.FC<AppProps> = ({ store }) => (
    <MuiThemeProvider theme={AppTheme}>
        <CssBaseline />
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path='/login' component={Login} exact strict />
                    <PrivateRoute
                        component={() => <AdminRecognitionListPage />}
                        path='/:country/recognitions'
                        exact
                        strict
                    />
                    <PrivateRoute
                        component={() => <AdminRecognitionArchiveListPage />}
                        path='/:country/recognitions/archive'
                        exact
                        strict
                    />
                    <PrivateRoute
                        component={() => (
                            <AdminRecognitionEmailConstructorPage />
                        )}
                        path='/:country/recognitions/email-constructor'
                        exact
                        strict
                    />
                    <Route
                        path='/:country/recognize'
                        component={RecognizePage}
                        exact
                        strict
                    />
                    <PrivateRoute
                        component={() => <AdminNewcomerListPage />}
                        path='/:country/newcomers'
                        exact
                        strict
                    />
                    <PrivateRoute
                        component={() => <AdminNewcomerArchiveListPage />}
                        path='/:country/newcomers/archive'
                        exact
                        strict
                    />
                    <PrivateRoute
                        component={() => <AdminNewcomerEmailConstructorPage />}
                        path='/:country/newcomers/email-constructor'
                        exact
                        strict
                    />
                    <Route
                        path='/:country/newcomer'
                        component={NewcomerPage}
                        exact
                        strict
                    />
                    <Route
                        path='/:country/newcomer-sent/'
                        component={NewcomerSentPage}
                    />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        </Provider>
    </MuiThemeProvider>
);
