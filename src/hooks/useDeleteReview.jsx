import { useMutation } from '@apollo/react-hooks';

import { DELETE_REVIEW } from '../graphql/mutations';

const useDeleteReview = () => {
    const [ mutate, result ] = useMutation(DELETE_REVIEW, {
        onError: (error) => {
            console.log(error.graphQLErrors[0].message);
        }
    });

    const deleteReview = async ({ id }) => {
        const { data } = await mutate({ variables: { id: id } });
        return data;
    };

    return [deleteReview, result];
};

export default useDeleteReview;
