import { gql } from "@apollo/client";

export const CREATE_DEPARTMENT = gql`
  mutation CreateDepartment($input: DepartmentDto!) {
    createDepartment(input: $input) {
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

