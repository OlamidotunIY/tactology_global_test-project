import { gql } from "@apollo/client";

export const GET_DEPARTMENTS = gql`
  query GetDepartments {
    getDepartments {
      data {
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
  }
`;
