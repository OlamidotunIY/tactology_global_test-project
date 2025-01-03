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
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "\n  mutation LoginUser($email: String!, $password: String!) {\n    login(loginInput: { email: $email, password: $password }) {\n      user {\n        email\n        id\n        fullname\n      }\n    }\n  }\n": types.LoginUserDocument,
    "\n  mutation LogoutUser {\n    logout\n  }\n": types.LogoutUserDocument,
    "\n  mutation RegisterUser(\n    $fullname: String!\n    $email: String!\n    $password: String!\n    $confirmPassword: String!\n  ) {\n    register(\n      registerInput: {\n        fullname: $fullname\n        email: $email\n        password: $password\n        confirmPassword: $confirmPassword\n      }\n    ) {\n      user {\n        id\n        fullname\n        email\n      }\n    }\n  }\n": types.RegisterUserDocument,
    "\n  mutation UpdateProfile($fullname: String!) {\n    updateProfile(fullname: $fullname) {\n      id\n      fullname\n    }\n  }\n": types.UpdateProfileDocument,
    "\n  mutation CreateDepartment($name: String!, $subDepartment: [SubDepartmentDto!]) {\n    createDepartment(data: { name: $name, subDepartment: $subDepartment }) {\n      id\n      name\n      createdAt\n      updatedAt\n      user {\n        id\n        fullname\n      }\n      subDepartments {\n        id\n        name\n      }\n    }\n  }\n": types.CreateDepartmentDocument,
    "\n  mutation DeleteDepartment($id: String!) {\n    deleteDepartment(id: $id) {\n      id\n      name\n      createdAt\n      updatedAt\n      user {\n        id\n        fullname\n      }\n      subDepartments {\n        id\n        name\n      }\n    }\n  }\n": types.DeleteDepartmentDocument,
    "\n  mutation UpdateDepartment($id: String!, $name: String!) {\n    updateDepartment(id: $id, name: $name) {\n      id\n      name\n      createdAt\n      updatedAt\n      user {\n        id\n        fullname\n      }\n      subDepartments {\n        id\n        name\n      }\n    }\n  }\n": types.UpdateDepartmentDocument,
    "\n  query GetDepartment($id: String!) {\n    getDepartment(id: $id) {\n      id\n      name\n      createdAt\n      updatedAt\n      user {\n        id\n        fullname\n      }\n      subDepartments {\n        id\n        name\n      }\n    }\n  }\n": types.GetDepartmentDocument,
    "\n  query GetDepartments {\n    getDepartments {\n      id\n      name\n      createdAt\n      updatedAt\n      user {\n        id\n        fullname\n      }\n      subDepartments {\n        id\n        name\n      }\n    }\n  }\n": types.GetDepartmentsDocument,
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
export function graphql(source: "\n  mutation LoginUser($email: String!, $password: String!) {\n    login(loginInput: { email: $email, password: $password }) {\n      user {\n        email\n        id\n        fullname\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation LoginUser($email: String!, $password: String!) {\n    login(loginInput: { email: $email, password: $password }) {\n      user {\n        email\n        id\n        fullname\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation LogoutUser {\n    logout\n  }\n"): (typeof documents)["\n  mutation LogoutUser {\n    logout\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation RegisterUser(\n    $fullname: String!\n    $email: String!\n    $password: String!\n    $confirmPassword: String!\n  ) {\n    register(\n      registerInput: {\n        fullname: $fullname\n        email: $email\n        password: $password\n        confirmPassword: $confirmPassword\n      }\n    ) {\n      user {\n        id\n        fullname\n        email\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation RegisterUser(\n    $fullname: String!\n    $email: String!\n    $password: String!\n    $confirmPassword: String!\n  ) {\n    register(\n      registerInput: {\n        fullname: $fullname\n        email: $email\n        password: $password\n        confirmPassword: $confirmPassword\n      }\n    ) {\n      user {\n        id\n        fullname\n        email\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateProfile($fullname: String!) {\n    updateProfile(fullname: $fullname) {\n      id\n      fullname\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateProfile($fullname: String!) {\n    updateProfile(fullname: $fullname) {\n      id\n      fullname\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateDepartment($name: String!, $subDepartment: [SubDepartmentDto!]) {\n    createDepartment(data: { name: $name, subDepartment: $subDepartment }) {\n      id\n      name\n      createdAt\n      updatedAt\n      user {\n        id\n        fullname\n      }\n      subDepartments {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateDepartment($name: String!, $subDepartment: [SubDepartmentDto!]) {\n    createDepartment(data: { name: $name, subDepartment: $subDepartment }) {\n      id\n      name\n      createdAt\n      updatedAt\n      user {\n        id\n        fullname\n      }\n      subDepartments {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteDepartment($id: String!) {\n    deleteDepartment(id: $id) {\n      id\n      name\n      createdAt\n      updatedAt\n      user {\n        id\n        fullname\n      }\n      subDepartments {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteDepartment($id: String!) {\n    deleteDepartment(id: $id) {\n      id\n      name\n      createdAt\n      updatedAt\n      user {\n        id\n        fullname\n      }\n      subDepartments {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateDepartment($id: String!, $name: String!) {\n    updateDepartment(id: $id, name: $name) {\n      id\n      name\n      createdAt\n      updatedAt\n      user {\n        id\n        fullname\n      }\n      subDepartments {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateDepartment($id: String!, $name: String!) {\n    updateDepartment(id: $id, name: $name) {\n      id\n      name\n      createdAt\n      updatedAt\n      user {\n        id\n        fullname\n      }\n      subDepartments {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetDepartment($id: String!) {\n    getDepartment(id: $id) {\n      id\n      name\n      createdAt\n      updatedAt\n      user {\n        id\n        fullname\n      }\n      subDepartments {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetDepartment($id: String!) {\n    getDepartment(id: $id) {\n      id\n      name\n      createdAt\n      updatedAt\n      user {\n        id\n        fullname\n      }\n      subDepartments {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetDepartments {\n    getDepartments {\n      id\n      name\n      createdAt\n      updatedAt\n      user {\n        id\n        fullname\n      }\n      subDepartments {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetDepartments {\n    getDepartments {\n      id\n      name\n      createdAt\n      updatedAt\n      user {\n        id\n        fullname\n      }\n      subDepartments {\n        id\n        name\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;