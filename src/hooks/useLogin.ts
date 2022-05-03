import { useHistory } from 'react-router-dom';

const sessionLoginName = 'hr-app:loginCountry';

export const useLogin = () => {
    const history = useHistory();

    const login = (countryId: string) => {
        localStorage.setItem(sessionLoginName, countryId);
    };

    const logout = () => {
        localStorage.removeItem(sessionLoginName);
        history.push('/login');
    };

    const isAuthorized = () => {
        return localStorage.getItem(sessionLoginName);
    };

    return {
        isAuthorized,
        login,
        logout
    };
};
