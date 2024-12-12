import { gql } from "@apollo/client";

export const CREATE_DEPARTMENT = gql`
  mutation CreateDepartment($name: String!, $subDepartment: [SubDepartmentDto!]) {
    createDepartment(data: { name: $name, subDepartment: $subDepartment }) {
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

