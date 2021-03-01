import { gql } from 'apollo-boost';

export const AUTHORIZE = gql`
    mutation signIn($credentials: AuthorizeInput!) {
        authorize(credentials: $credentials) {
            accessToken
        }
    }
`;

export const CREATE_REVIEW = gql`
    mutation createNewReview($reviewInput: CreateReviewInput!) {
        createReview(review: $reviewInput) {
            repositoryId
        }
    }
`;

export const CREATE_USER = gql`
    mutation createNewUser($userInput: CreateUserInput!) {
        createUser(user: $userInput) {
            username
        }
    }
`;

export const DELETE_REVIEW = gql`
    mutation deleteReview($id: ID!) {
        deleteReview(id: $id)
    }
`;
