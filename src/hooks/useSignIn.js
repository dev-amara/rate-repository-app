import { useContext } from 'react';
import { useMutation, useApolloClient } from '@apollo/react-hooks';
import { useHistory } from 'react-router-native';

import { AUTHORIZE } from '../graphql/mutations';
import AuthStorageContext from '../contexts/AuthStorageContext';

const useSignIn = () => {
    const history = useHistory();
    const authStorage = useContext(AuthStorageContext);
    const apolloClient = useApolloClient();
    const [mutate, result] = useMutation(AUTHORIZE);

    const signIn = async ({ username, password }) => {
        const { data } = await mutate({
            variables: { credentials: { username, password } },
        });
        await authStorage.setAccessToken(data['authorize'].accessToken);
        await apolloClient.resetStore();
        history.push('/');
    };

    return [signIn, result];
};

export default useSignIn;
