import { gql } from "@apollo/client"

export const REGISTER_USER = gql`
  mutation RegisterUser(
    $username: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register(
      registerInput: {
        username: $username
        password: $password
        confirmPassword: $confirmPassword
      }
    ) {
      user {
        id
        username
      }
    }
  }
`