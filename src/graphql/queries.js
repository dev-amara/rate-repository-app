import { gql } from 'apollo-boost';

export const GET_REPOSITORIES = gql`
    query getRepositories(
        $orderBy: AllRepositoriesOrderBy!,
        $orderDirection: OrderDirection!,
        $searchKeyword: String,
        $after: String,
        $first: Int
    ) {
        repositories (
            orderBy: $orderBy,
            orderDirection: $orderDirection,
            searchKeyword: $searchKeyword,
            after: $after,
            first: $first
        ) {
            edges {
                node {
                    id
                    ownerAvatarUrl
                    fullName
                    description
                    language
                    stargazersCount
                    forksCount
                    ratingAverage
                    reviewCount
                }
                cursor
            }
            pageInfo {
                endCursor
                startCursor
                totalCount
                hasNextPage
            }
        }
    }
`;

export const GET_REPOSITORY = gql`
    query getRepository(
        $id: ID!,
        $after: String,
        $first: Int
    ) {
        repository(id: $id) {
            ownerAvatarUrl
            fullName
            description
            language
            stargazersCount
            forksCount
            reviewCount
            ratingAverage
            url
            reviews(
                after: $after,
                first: $first
            ) {
                edges {
                    node {
                        id
                        text
                        rating
                        createdAt
                        user {
                            id
                            username
                        }
                    }
                    cursor
                }
                pageInfo {
                    endCursor
                    startCursor
                    totalCount
                    hasNextPage
                }
            }
        }
    }
`;

export const AUTHORIZED_USER = gql`
    query getAuthorizedUser(
        $includeReviews: Boolean = false
    ) {
        authorizedUser {
            id
            username
            reviews @include(if: $includeReviews) {
                edges {
                    node {
                        repository {
                            fullName
                            id
                        }
                        createdAt
                        rating
                        text
                        id
                    }
                }
            }
        }
    }
`;
