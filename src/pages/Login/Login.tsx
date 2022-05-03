import React from 'react';
import { useHistory } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import { SelectProps } from '@material-ui/core/Select';

import { Select } from '~/components/Select';
import { PageContent } from '~/components/PageContent';
import { NEWCOMER_ROUTES, COUNTRIES } from '~/constants';
import { useLogin } from '~/hooks/useLogin';

import * as S from './Login.style';

export const Login = () => {
    const history = useHistory();
    const { login } = useLogin();

    const onCountrySelect: SelectProps['onChange'] = (event) => {
        const country = event.target.value;
        login(country as string);
        history.push(`/${country}${NEWCOMER_ROUTES.newcomers}`);
    };

    return (
        <PageContent>
            <S.Form>
                <S.Title>Select your department</S.Title>
                <Select
                    onChange={onCountrySelect}
                    fullWidth={true}
                    name='country'
                    value={''}
                >
                    {COUNTRIES.map(({ id, name }) => (
                        <MenuItem value={id} key={id}>
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </S.Form>
        </PageContent>
    );
};
