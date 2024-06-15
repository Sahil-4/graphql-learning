import { gql } from "@apollo/client";

export const GET_USERS = gql(`#graphql
    query Query {
        users {
            _id
            name
            email
        }
    }
`);

export const GET_NOTES = gql(`#graphql
    query Query {
        notes {
            _id
            title
            body
            userId {
                _id
                name
            }
        }
    }
`);

export const ADD_USER = gql(`#graphql
    mutation User($name: String!, $email: String!, $passkey: String!) {
        User(name: $name, email: $email, passkey: $passkey) {
            _id
            name
            email
        }
    }
`);
