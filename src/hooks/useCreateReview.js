import { useMutation } from '@apollo/react-hooks';

import { CREATE_REVIEW } from '../graphql/mutations';

const useCreateReview = () => {
    const [ mutate, result ] = useMutation(CREATE_REVIEW, {
        onError: (error) => {
            console.log(error.graphQLErrors[0].message);
        }
    });

    const createReview = async ({ ownerName, repositoryName, rating, text }) => {
        const { data } = await mutate({ variables: { reviewInput: { ownerName, repositoryName, rating, text } } });
        return data;
    };

    return [createReview, result];
};

export default useCreateReview;
