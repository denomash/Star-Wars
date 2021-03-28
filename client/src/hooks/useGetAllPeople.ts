import { useQuery, gql } from "@apollo/client";

const GET_ALL_PEOPLE = gql`
  query GET_ALL_PEOPLE($page: Int!) {
    getAllPeople(page: $page) {
      count
      next
      previous
      people {
        name
        height
        mass
        gender
        homeworld
      }
    }
  }
`;

const useGetAllPeople = (page: any) => {
  return useQuery(GET_ALL_PEOPLE, {
    variables: {
      page,
    },
  });
};

export default useGetAllPeople;
