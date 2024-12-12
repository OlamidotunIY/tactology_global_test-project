import { gql } from "@apollo/client";

export const UPDATE_DEPARTMENT = gql`
  mutation UpdateDepartment($id: String!, $name: String!) {
    updateDepartment(id: $id, name: $name) {
      id
      name
      createdAt
      updatedAt
      user {
        id
        fullname
      }
      subDepartments {
        id
        name
      }
    }
  }
`;
