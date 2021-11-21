import { gql } from '@apollo/client/core';

export const typeDefs = gql `
  extend type Query {
    isLoggedIn: Boolean!
    cartItems: [ID!]!
  }
`