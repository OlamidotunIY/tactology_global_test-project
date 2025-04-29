import { gql } from "@apollo/client"

export const UPDATE_PROFILE = gql`
  mutation UpdateProfile($username: String!) {
    updateProfile(username: $username) {
      id
      username
    }
  }
`