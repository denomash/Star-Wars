import React, { FC, useState, useEffect } from "react";
import { useLocation } from "@reach/router";
import { parse } from "query-string";

import useGetAllPeople from "../hooks/useGetAllPeople";
import { PageType } from "../types/PageType";

const PeopleContext = React.createContext({});

export const PeopleProvider: FC<PageType> = (props: any) => {
  const [count, setCount] = useState(0);
  const location = useLocation();

  const searchParams: any = parse(location.search);
  const page = parseFloat(searchParams.page) || 1;

  let { loading, error, data } = useGetAllPeople(page);

  useEffect(() => {
    if (!loading) {
      const incomingCount = data?.getAllPeople?.count;
      count !== incomingCount && setCount(parseFloat(incomingCount));
    }
  }, [loading, count, data?.getAllPeople?.count]);

  let people = !loading || data?.getAllPeople ? data?.getAllPeople : null;

  return (
    <PeopleContext.Provider value={{ loading, people, count, error }}>
      {props.children}
    </PeopleContext.Provider>
  );
};

export const PeopleConsumer = PeopleContext.Consumer;
export default PeopleContext;
