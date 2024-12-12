/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type Department = {
  __typename?: 'Department';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  subDepartments?: Maybe<Array<SubDepartment>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
};

export type DepartmentDto = {
  name: Scalars['String']['input'];
  subDepartment?: InputMaybe<Array<SubDepartmentDto>>;
};

export type LoginDto = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  user?: Maybe<User>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createDepartment: Department;
  createSubDepartment: SubDepartment;
  deleteDepartment: Department;
  deleteSubDepartment: SubDepartment;
  login: LoginResponse;
  logout: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
  register: RegisterResponse;
  updateDepartment: Department;
  updateProfile: User;
  updateSubDepartment: SubDepartment;
};


export type MutationCreateDepartmentArgs = {
  data: DepartmentDto;
};


export type MutationCreateSubDepartmentArgs = {
  departmentId: Scalars['Float']['input'];
  name: Scalars['String']['input'];
};


export type MutationDeleteDepartmentArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteSubDepartmentArgs = {
  id: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  loginInput: LoginDto;
};


export type MutationRegisterArgs = {
  registerInput: RegisterDto;
};


export type MutationUpdateDepartmentArgs = {
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
};


export type MutationUpdateProfileArgs = {
  fullname: Scalars['String']['input'];
};


export type MutationUpdateSubDepartmentArgs = {
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  getDepartment: Department;
  getDepartments: Array<Department>;
  getSubDepartment: SubDepartment;
  getSubDepartments: Array<SubDepartment>;
  hello: Scalars['String']['output'];
};


export type QueryGetDepartmentArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetSubDepartmentArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetSubDepartmentsArgs = {
  departmentId: Scalars['Float']['input'];
};

export type RegisterDto = {
  confirmPassword: Scalars['String']['input'];
  email: Scalars['String']['input'];
  fullname: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type RegisterResponse = {
  __typename?: 'RegisterResponse';
  user?: Maybe<User>;
};

export type SubDepartment = {
  __typename?: 'SubDepartment';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  department?: Maybe<Department>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type SubDepartmentDto = {
  department: Scalars['Float']['input'];
  name: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  fullname: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  password: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type LoginUserMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginUserMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResponse', user?: { __typename?: 'User', email: string, id: number, fullname: string } | null } };

export type LogoutUserMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutUserMutation = { __typename?: 'Mutation', logout: string };

export type RegisterUserMutationVariables = Exact<{
  fullname: Scalars['String']['input'];
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  confirmPassword: Scalars['String']['input'];
}>;


export type RegisterUserMutation = { __typename?: 'Mutation', register: { __typename?: 'RegisterResponse', user?: { __typename?: 'User', id: number, fullname: string, email: string } | null } };

export type UpdateProfileMutationVariables = Exact<{
  fullname: Scalars['String']['input'];
}>;


export type UpdateProfileMutation = { __typename?: 'Mutation', updateProfile: { __typename?: 'User', id: number, fullname: string } };

export type CreateDepartmentMutationVariables = Exact<{
  name: Scalars['String']['input'];
  subDepartment?: InputMaybe<Array<SubDepartmentDto> | SubDepartmentDto>;
}>;


export type CreateDepartmentMutation = { __typename?: 'Mutation', createDepartment: { __typename?: 'Department', id?: string | null, name?: string | null, createdAt?: any | null, updatedAt?: any | null, user?: { __typename?: 'User', id: number, fullname: string } | null, subDepartments?: Array<{ __typename?: 'SubDepartment', id?: string | null, name?: string | null }> | null } };

export type DeleteDepartmentMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteDepartmentMutation = { __typename?: 'Mutation', deleteDepartment: { __typename?: 'Department', id?: string | null, name?: string | null, createdAt?: any | null, updatedAt?: any | null, user?: { __typename?: 'User', id: number, fullname: string } | null, subDepartments?: Array<{ __typename?: 'SubDepartment', id?: string | null, name?: string | null }> | null } };

export type UpdateDepartmentMutationVariables = Exact<{
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
}>;


export type UpdateDepartmentMutation = { __typename?: 'Mutation', updateDepartment: { __typename?: 'Department', id?: string | null, name?: string | null, createdAt?: any | null, updatedAt?: any | null, user?: { __typename?: 'User', id: number, fullname: string } | null, subDepartments?: Array<{ __typename?: 'SubDepartment', id?: string | null, name?: string | null }> | null } };

export type GetDepartmentQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetDepartmentQuery = { __typename?: 'Query', getDepartment: { __typename?: 'Department', id?: string | null, name?: string | null, createdAt?: any | null, updatedAt?: any | null, user?: { __typename?: 'User', id: number, fullname: string } | null, subDepartments?: Array<{ __typename?: 'SubDepartment', id?: string | null, name?: string | null }> | null } };

export type GetDepartmentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDepartmentsQuery = { __typename?: 'Query', getDepartments: Array<{ __typename?: 'Department', id?: string | null, name?: string | null, createdAt?: any | null, updatedAt?: any | null, user?: { __typename?: 'User', id: number, fullname: string } | null, subDepartments?: Array<{ __typename?: 'SubDepartment', id?: string | null, name?: string | null }> | null }> };


export const LoginUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LoginUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"loginInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}}]}}]}}]}}]} as unknown as DocumentNode<LoginUserMutation, LoginUserMutationVariables>;
export const LogoutUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LogoutUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logout"}}]}}]} as unknown as DocumentNode<LogoutUserMutation, LogoutUserMutationVariables>;
export const RegisterUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RegisterUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fullname"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"confirmPassword"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"register"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"registerInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"fullname"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fullname"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"confirmPassword"},"value":{"kind":"Variable","name":{"kind":"Name","value":"confirmPassword"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]}}]} as unknown as DocumentNode<RegisterUserMutation, RegisterUserMutationVariables>;
export const UpdateProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fullname"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProfile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"fullname"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fullname"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}}]}}]}}]} as unknown as DocumentNode<UpdateProfileMutation, UpdateProfileMutationVariables>;
export const CreateDepartmentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateDepartment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"subDepartment"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SubDepartmentDto"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createDepartment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"subDepartment"},"value":{"kind":"Variable","name":{"kind":"Name","value":"subDepartment"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}}]}},{"kind":"Field","name":{"kind":"Name","value":"subDepartments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<CreateDepartmentMutation, CreateDepartmentMutationVariables>;
export const DeleteDepartmentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteDepartment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteDepartment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}}]}},{"kind":"Field","name":{"kind":"Name","value":"subDepartments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<DeleteDepartmentMutation, DeleteDepartmentMutationVariables>;
export const UpdateDepartmentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateDepartment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateDepartment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}}]}},{"kind":"Field","name":{"kind":"Name","value":"subDepartments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateDepartmentMutation, UpdateDepartmentMutationVariables>;
export const GetDepartmentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetDepartment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getDepartment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}}]}},{"kind":"Field","name":{"kind":"Name","value":"subDepartments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetDepartmentQuery, GetDepartmentQueryVariables>;
export const GetDepartmentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetDepartments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getDepartments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}}]}},{"kind":"Field","name":{"kind":"Name","value":"subDepartments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetDepartmentsQuery, GetDepartmentsQueryVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type Department = {
  __typename?: 'Department';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  subDepartments?: Maybe<Array<SubDepartment>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
};

export type DepartmentDto = {
  name: Scalars['String']['input'];
  subDepartment?: InputMaybe<Array<SubDepartmentDto>>;
};

export type LoginDto = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  user?: Maybe<User>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createDepartment: Department;
  createSubDepartment: SubDepartment;
  deleteDepartment: Department;
  deleteSubDepartment: SubDepartment;
  login: LoginResponse;
  logout: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
  register: RegisterResponse;
  updateDepartment: Department;
  updateProfile: User;
  updateSubDepartment: SubDepartment;
};


export type MutationCreateDepartmentArgs = {
  data: DepartmentDto;
};


export type MutationCreateSubDepartmentArgs = {
  departmentId: Scalars['Float']['input'];
  name: Scalars['String']['input'];
};


export type MutationDeleteDepartmentArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteSubDepartmentArgs = {
  id: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  loginInput: LoginDto;
};


export type MutationRegisterArgs = {
  registerInput: RegisterDto;
};


export type MutationUpdateDepartmentArgs = {
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
};


export type MutationUpdateProfileArgs = {
  fullname: Scalars['String']['input'];
};


export type MutationUpdateSubDepartmentArgs = {
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  getDepartment: Department;
  getDepartments: Array<Department>;
  getSubDepartment: SubDepartment;
  getSubDepartments: Array<SubDepartment>;
  hello: Scalars['String']['output'];
};


export type QueryGetDepartmentArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetSubDepartmentArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetSubDepartmentsArgs = {
  departmentId: Scalars['Float']['input'];
};

export type RegisterDto = {
  confirmPassword: Scalars['String']['input'];
  email: Scalars['String']['input'];
  fullname: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type RegisterResponse = {
  __typename?: 'RegisterResponse';
  user?: Maybe<User>;
};

export type SubDepartment = {
  __typename?: 'SubDepartment';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  department?: Maybe<Department>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type SubDepartmentDto = {
  department: Scalars['Float']['input'];
  name: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  fullname: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  password: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};
