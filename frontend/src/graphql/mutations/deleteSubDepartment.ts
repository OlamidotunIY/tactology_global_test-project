import { gql } from "@apollo/client";


export const DELETE_SUB_DEPARTMENT = gql`
  mutation DeleteSubDepartment($id: String!) {
    deleteSubDepartment(id: $id) {
      id
      name
      department {...}
      createdAt
      updatedAt
    }
  }
`;
