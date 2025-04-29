import { gql } from "@apollo/client";

export const CREATE_SUB_DEPARTMENT = gql`
  mutation CreateSubDepartment($departmentId: String!, $name: String!) {
    createSubDepartment(departmentId: $departmentId, name: $name) {
      id
      name
      department {...}
      createdAt
      updatedAt
    }
  }
`;
