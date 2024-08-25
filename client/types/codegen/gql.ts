/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    fragment user on User {\n        id\n        name\n        email\n        created_at\n        updated_at\n    }\n": types.UserFragmentDoc,
    "\n    query user($id: ID!) {\n        user(id: $id) {\n            ...user\n        }\n    }\n    \n": types.UserDocument,
    "\n    query users {\n        users {\n            ...user\n        }\n    }\n    \n": types.UsersDocument,
    "\n    query usersPaginate($first: Int!, $page: Int) {\n        usersPaginate(first: $first, page: $page) {\n            data {\n                ...user\n            }\n            paginatorInfo {\n                currentPage\n                lastPage\n                total\n                hasMorePages\n            }\n        }\n    }\n    \n": types.UsersPaginateDocument,
    "\n    mutation createUser($input: CreateUserInput!) {\n        createUser(input: $input) {\n            ...user\n        }\n    }\n    \n": types.CreateUserDocument,
    "\n    mutation updateUser($input: UpdateUserInput!) {\n        updateUser(input: $input) {\n            ...user\n        }\n    }\n    \n": types.UpdateUserDocument,
    "\n    mutation upsertUser($input: UpsertUserInput!) {\n        upsertUser(input: $input) {\n            ...user\n        }\n    }\n    \n": types.UpsertUserDocument,
    "\n    mutation deleteUser($id: ID!) {\n        deleteUser(id: $id) {\n            ...user\n        }\n    }\n    \n": types.DeleteUserDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment user on User {\n        id\n        name\n        email\n        created_at\n        updated_at\n    }\n"): (typeof documents)["\n    fragment user on User {\n        id\n        name\n        email\n        created_at\n        updated_at\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query user($id: ID!) {\n        user(id: $id) {\n            ...user\n        }\n    }\n    \n"): (typeof documents)["\n    query user($id: ID!) {\n        user(id: $id) {\n            ...user\n        }\n    }\n    \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query users {\n        users {\n            ...user\n        }\n    }\n    \n"): (typeof documents)["\n    query users {\n        users {\n            ...user\n        }\n    }\n    \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query usersPaginate($first: Int!, $page: Int) {\n        usersPaginate(first: $first, page: $page) {\n            data {\n                ...user\n            }\n            paginatorInfo {\n                currentPage\n                lastPage\n                total\n                hasMorePages\n            }\n        }\n    }\n    \n"): (typeof documents)["\n    query usersPaginate($first: Int!, $page: Int) {\n        usersPaginate(first: $first, page: $page) {\n            data {\n                ...user\n            }\n            paginatorInfo {\n                currentPage\n                lastPage\n                total\n                hasMorePages\n            }\n        }\n    }\n    \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation createUser($input: CreateUserInput!) {\n        createUser(input: $input) {\n            ...user\n        }\n    }\n    \n"): (typeof documents)["\n    mutation createUser($input: CreateUserInput!) {\n        createUser(input: $input) {\n            ...user\n        }\n    }\n    \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation updateUser($input: UpdateUserInput!) {\n        updateUser(input: $input) {\n            ...user\n        }\n    }\n    \n"): (typeof documents)["\n    mutation updateUser($input: UpdateUserInput!) {\n        updateUser(input: $input) {\n            ...user\n        }\n    }\n    \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation upsertUser($input: UpsertUserInput!) {\n        upsertUser(input: $input) {\n            ...user\n        }\n    }\n    \n"): (typeof documents)["\n    mutation upsertUser($input: UpsertUserInput!) {\n        upsertUser(input: $input) {\n            ...user\n        }\n    }\n    \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation deleteUser($id: ID!) {\n        deleteUser(id: $id) {\n            ...user\n        }\n    }\n    \n"): (typeof documents)["\n    mutation deleteUser($id: ID!) {\n        deleteUser(id: $id) {\n            ...user\n        }\n    }\n    \n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;