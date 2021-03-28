import { useQuery, gql } from "@apollo/client";

const GET_PERSON = gql`
  query GET_PERSON($name: String!) {
    getPerson(name: $name) {
      name
      height
      mass
      gender
      homeworld
    }
  }
`;

const useGetPerson = (name: any) => {
  return useQuery(GET_PERSON, {
    variables: {
      name,
    },
  });
};

export default useGetPerson;
