import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';

import { AUTHORIZED_USER } from '../graphql/queries';

const useAuthorizedUser = variables => {
    const [authorizedUser, setAuthorizedUser] = useState();

    const { data, error, loading, refetch } = useQuery(AUTHORIZED_USER, {
        variables,
        fetchPolicy: 'cache-and-network',
        onError: () => console.log(error)
    });

    const fetchAuthorizedUser = () => {
        setAuthorizedUser(loading ? null : data.authorizedUser);
    };

    useEffect(() => {
        fetchAuthorizedUser();
    }, [fetchAuthorizedUser]);

    return { authorizedUser, loading, refetch };
};

export default useAuthorizedUser;
