import { gql } from "@apollo/client";


export const GET_DEPARTMENTS = gql`
  query GetDepartments {
    getDepartments {
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
