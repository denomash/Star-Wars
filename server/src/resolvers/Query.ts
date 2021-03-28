import axios from "axios";

import { BASE_URL } from "../constants";

const Query = {
  getAllPeople: async (_: any, { page }: any) => {
    const response = (await axios.get(`${BASE_URL}/people/?page=${page}`)).data;

    const data = {
      count: response.count,
      next: response.next,
      previous: response.previous,
      people: response.results,
    };

    return data;
  },

  getPerson: async (_: any, { name }: any) => {
    const person = (await axios.get(`${BASE_URL}/people/?search=${name}`)).data
      .results;

    return person;
  },
};

export default Query;
