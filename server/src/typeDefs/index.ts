import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Query {
    getAllPeople(page: Int!): AllPeople
    getPerson(name: String!): [Person]
  }

  type Person {
    name: String
    height: String
    mass: String
    gender: String
    homeworld: String
  }

  type AllPeople {
    count: Int
    next: String
    previous: String
    people: [Person]
  }
`;

export default typeDefs;
