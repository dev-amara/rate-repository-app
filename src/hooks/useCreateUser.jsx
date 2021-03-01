import { useMutation } from '@apollo/react-hooks';

import { CREATE_USER } from '../graphql/mutations';

const useCreateUser = () => {
    const [ mutate, result ] = useMutation(CREATE_USER, {
        onError: (error) => {
            console.log(error.graphQLErrors[0].message);
        }
    });

    const createUser = async ({ username, password }) => {
        const { data } = await mutate({ variables: { userInput: { username, password } } });
        return data;
    };

    return [createUser, result];
};

export default useCreateUser;
