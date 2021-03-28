import React, { FC } from "react";
import { navigate } from "@reach/router";

// types
import { PageType } from "../../types/PageType";
import { IPerson } from "../../types/common";

import PersonList from "../../components/PersonList/PersonList";
import Pagination from "../../components/Pagination/Pagination";
import Loader from "../../components/Common/Loader";

import { PeopleConsumer } from "../../contexts/PeopleProvider";

const AllPeople: FC<PageType> = () => {
  return (
    <div className="container">
      <div className="center">
        <h1>The Star Wars People</h1>
      </div>

      <PeopleConsumer>
        {({ loading, people, count }: any) => {
          return (
            <>
              <div className="center">
                <Pagination
                  next={people?.next}
                  previous={people?.previous}
                  count={count}
                />
              </div>

              {loading ? (
                <div className="loader">
                  <Loader />
                </div>
              ) : (
                <div className="people-container">
                  {people?.people.map((person: IPerson) => (
                    <div onClick={() => navigate(`/details/${person.name}`)}>
                      <PersonList key={person.name} person={person} />
                    </div>
                  ))}
                </div>
              )}
              <div className="center">
                <Pagination
                  next={people?.next}
                  previous={people?.previous}
                  count={count}
                />
              </div>
            </>
          );
        }}
      </PeopleConsumer>
    </div>
  );
};

export default AllPeople;
