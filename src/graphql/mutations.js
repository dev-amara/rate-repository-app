import { gql } from '@apollo/react-hooks';

export const AUTHORIZE = gql`
    mutation authorize($credentials: AuthorizeInput!) {
        authorize(credentials: $credentials) {
            accessToken
        }
    }
`;
