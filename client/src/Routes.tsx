import React, { FC } from "react";
import { Router, RouteComponentProps } from "@reach/router";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// container components
import AllPeople from "./containers/AllPeople";
import Navbar from "./components/Navbar/Navbar";
import PersonDetails from "./containers/PersonDetails/PersonDetails";

// styled components
import Wrapper from "./components/styled/Wrapper";

import { PeopleProvider } from "./contexts/PeopleProvider";

const client = new ApolloClient({
  uri: "https://swapi-server.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});

const appRouter: FC<RouteComponentProps> = () => (
  <ApolloProvider client={client}>
    <Navbar />
    <Wrapper>
      <Router>
        <PeopleProvider path="/">
          <AllPeople path="/" />
          <PersonDetails path="/details/:name" />
        </PeopleProvider>
      </Router>
    </Wrapper>
  </ApolloProvider>
);

export default appRouter;
