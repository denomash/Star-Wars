import React, { FC } from "react";
import { navigate } from "@reach/router";
import { useLocation } from "@reach/router";

// types
import { PageType } from "../../types/PageType";
import { IPerson } from "../../types/common";

import Loader from "../../components/Common/Loader";
import PersonDetailStyles from "../../components/styled/PersonDetailsStyles";
import PersonDetailsComponent from "../../components/PersonDetails/PersonDetails";

// hooks
import useGetPerson from "../../hooks/useGetPerson";

const PersonDetails: FC<PageType> = () => {
  const location = useLocation();
  const name = location.pathname.split("/").pop();

  // eslint-disable-next-line
  const { loading, error, data }: any = useGetPerson(name);

  const user: IPerson = data?.getPerson[0];

  return (
    <div className="container">
      <div className="center">
        {!loading && (
          <h1>
            Details For <span>{user.name}</span>
          </h1>
        )}
      </div>

      <PersonDetailStyles>
        <div className="back-link">
          <p onClick={() => navigate(-1)}>{`<`} back</p>
        </div>

        <div className={`details-container ${loading ? "center" : ""}`}>
          {loading ? <Loader /> : <PersonDetailsComponent user={user} />}
        </div>
      </PersonDetailStyles>
    </div>
  );
};

export default PersonDetails;
