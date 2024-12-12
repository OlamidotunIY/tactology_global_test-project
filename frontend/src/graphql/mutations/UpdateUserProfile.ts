import { gql } from "@apollo/client"

export const UPDATE_PROFILE = gql`
  mutation UpdateProfile($fullname: String!) {
    updateProfile(fullname: $fullname) {
      id
      fullname
    }
  }
`