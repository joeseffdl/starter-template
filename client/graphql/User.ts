import { userFragment } from "~/graphql/Fragment";

export const user = gql`
    query user($id: ID!) {
        user(id: $id) {
            ...user
        }
    }
    ${userFragment}
`;

export const users = gql`
    query users {
        users {
            ...user
        }
    }
    ${userFragment}
`;

export const usersPaginate = gql`
    query usersPaginate($first: Int!, $page: Int) {
        usersPaginate(first: $first, page: $page) {
            data {
                ...user
            }
            paginatorInfo {
                currentPage
                lastPage
                total
                hasMorePages
            }
        }
    }
    ${userFragment}
`;

export const createUser = gql`
    mutation createUser($input: CreateUserInput!) {
        createUser(input: $input) {
            ...user
        }
    }
    ${userFragment}
`;

export const updateUser = gql`
    mutation updateUser($input: UpdateUserInput!) {
        updateUser(input: $input) {
            ...user
        }
    }
    ${userFragment}
`;

export const upsertUser = gql`
    mutation upsertUser($input: UpsertUserInput!) {
        upsertUser(input: $input) {
            ...user
        }
    }
    ${userFragment}
`;

export const deleteUser = gql`
    mutation deleteUser($id: ID!) {
        deleteUser(id: $id) {
            ...user
        }
    }
    ${userFragment}
`;
