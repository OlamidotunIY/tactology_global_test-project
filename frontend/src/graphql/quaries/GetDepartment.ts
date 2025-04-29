import { gql } from "@apollo/client";

export const GET_DEPARTMENT = gql`
  query GetDepartment($id: String!) {
    getDepartment(id: $id) {
      id
      name
      createdAt
      updatedAt
      user {
        id
        username
      }
      subDepartments {
        id
        name
      }
    }
  }
`;
