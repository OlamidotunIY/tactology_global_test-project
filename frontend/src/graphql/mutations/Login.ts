import { gql } from "@apollo/client"

export const LOGIN_USER = gql`
  mutation LoginUser($username: String!, $password: String!) {
    login(loginInput: { username: $username, password: $password }) {
      user {
        id
        username
      }
      accessToken
    }
  }
`