import { gql } from "@apollo/client";

export const DELETE_DEPARTMENT = gql`
  mutation DeleteDepartment($id: String!) {
    deleteDepartment(id: $id) {
      message
      success
    }
  }
`;
