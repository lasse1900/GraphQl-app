import { gql } from 'apollo-boost'

/* Recepes queries */
export const GET_ALL_RECIPES = gql`

query {
  getAllRecipes {
    name
    description
    instructions
    category
    likes
    createdDate
  }
}

`;

/* Recepes mutations */


/* User queries */


/* User mutations */

export const SIGNUP_USER = gql`
mutation($username: String!, $email: String!, $password: String!) {
  signupUser(username: $username, email: $email, password: $password) {
    token
  }
}

`



